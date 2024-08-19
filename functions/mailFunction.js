const nodemailer = require("nodemailer");

exports.transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "askus@radush.io",
    pass: "nubn khfp ekzs yyco",
  },
});

exports.userMailOptions = (name, email, course) => {
  return {
    from: "askus@radush.io",
    to: email,
    subject: `Thank you for your interest in ${course}`,
    text: `Dear ${name},
  
  Thank you for expressing interest in our course, "${course}". We have received your request and will get back to you soon with more details.
  
  If you have any questions in the meantime, feel free to reach out to us.
  
  Best regards,
  Radush Technologies
  `,
  };
};

exports.clientMailOptions = (name, email, course) => {
  return {
    from: "askus@radush.io",
    to: "shakeelabala@radush.io",
    cc: "sj@radush.io, ramesh.sudha@radush.io",
    subject: `New Interest in ${course}`,
    text: `Hello Admin,
  
  A new user has expressed interest in the course "${course}".
  
  User Details:
  - Email: ${email}
  - Name: ${name}
  
  Please review and follow up accordingly.
  
  Best regards,
  Radush Technologies
  `,
  };
};

// // try {
// //   // Send emails
// //   await transporter.sendMail(userMailOptions);
// //   await transporter.sendMail(clientMailOptions);
// //   console.log("Emails sent successfully!");
// //   return { success: true };
// // } catch (error) {
// //   console.error("Error sending emails:", error);
// //   return { success: false, error: error.message };
// // }
