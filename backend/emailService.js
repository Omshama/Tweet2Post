// emailService.js
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

module.exports = async function sendEmail(tweet) {
  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: process.env.RECEIVER_EMAIL,
    subject: '🚨 Insane Tweet Detected!',
    html: `
      <h3>${tweet.text}</h3>
      <p><a href="https://twitter.com/i/web/status/${tweet.id}">View Tweet</a></p>
    `,
  };

  await transporter.sendMail(mailOptions);
  console.log('✅ Email sent.');
};
