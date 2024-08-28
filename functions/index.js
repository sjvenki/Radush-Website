/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
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
admin.initializeApp();

console.log("Log is running");

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
// Create and deploy your firsdatt functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });
