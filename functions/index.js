/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 * https://firebase.google.com/docs/functions/get-started
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const admin = require("firebase-admin");
const {
  onDocumentCreated,
  onDocumentUpdated,
} = require("firebase-functions/v2/firestore");
const {
  transporter,
  clientMailOptions,
  userMailOptions,
  contactUsMail,
} = require("./mailFunction");
const { onRequest } = require("firebase-functions/v2/https");
const { logger } = require("firebase-functions");
const razorPay = require("razorpay");
const {
  validatePaymentVerification,
} = require("razorpay/dist/utils/razorpay-utils");
const { getFirestore } = require("firebase-admin/firestore");

admin.initializeApp();
const db = getFirestore();

console.log("Log is running");
const instance = new razorPay({
  key_id: "rzp_test_B6bqVWAfF7BjWN",
  key_secret: "9ZpC0yi6Grd4v46pNLPdX33B",
});

const sendMail = async (name, email, course) => {
  try {
    await transporter.sendMail(userMailOptions(name, email, course));
    await transporter.sendMail(clientMailOptions(name, email, course));
    console.log("Email Successful", email);
  } catch (err) {
    console.log(err);
    return;
  }
};

exports.sendInterestMail = onDocumentCreated(
  "user_interested_courses/{userId}",
  async (event) => {
    const snap = event.data;
    const { user_name, user_email, courses } = snap.data();
    await sendMail(user_name, user_email, courses[courses.length - 1].name);
  }
);

exports.sendInterestMailOnUpdate = onDocumentUpdated(
  "user_interested_courses/{userId}",
  async (event) => {
    const snap = event.data;
    const { user_name, user_email, courses } = snap.after.data();
    await sendMail(user_name, user_email, courses[courses.length - 1].name);
  }
);

exports.contactMail = onDocumentCreated(
  "user_contact/{userId}",
  async (event) => {
    const snap = event.data;
    await transporter.sendMail(contactUsMail(snap.data()));
  }
);

//create order details
exports.createsOrder = onRequest(async (req, res) => {
  try {
    req.setTimeout(140000);
    console.log("body data", req.body.data);
    const { amount, notes } = req.body.data;
    const options = {
      amount: amount,
      currency: "INR",
      notes: notes,
    };
    const order = await instance.orders.create(options);
    console.log(order);
    res.status(200).json({
      data: {
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//check the payment
exports.validatePayment = onRequest(async (req, res) => {
  const { orderId, paymentId, signature, userId } = req.body.data;
  const result = validatePaymentVerification(
    { order_id: orderId, payment_id: paymentId },
    signature,
    "9ZpC0yi6Grd4v46pNLPdX33B"
  );
  if (result) {
    const createTransactData = {
      order_id: orderId,
      payment_id: paymentId,
      user_id: userId,
    };
    console.log(createTransactData);
    await db.collection("user_enrolled_courses").doc(orderId).set(orderId);
  }
});

exports.testingFire = onRequest(async (req, res) => {
  const data = {
    name: "Los Angeles",
    state: "CA",
    country: "USA",
  };
  // orderid, paymentid, userid, courseName, date, price;
  // Add a new document in collection "cities" with ID 'LA'
  await db.collection("cities").doc("LA").set(data);
});

//Who ever see this code please don't delete the helloWord cause that is one I struggled to do in firebase

// exports.helloWorld = onRequest((request, response) => {
//   response.status(200).json({ data: { message: "hello" } });
// });

//send email to admin and user who purchased the course w
// for admin - user details along with course, date and price
//for user - one congraulate message and will contact you shortly
