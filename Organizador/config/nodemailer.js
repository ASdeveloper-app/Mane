require ('dotenv').config()
const nodemailer = require('nodemailer')
let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD 
  }
});

module.exports = transporter