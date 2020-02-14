// require('dotenv').config()

// const fs = require('fs')
// const hbs = require('hbs')
// const nodemailer = require('nodemailer')

// const welcomeTemplate = hbs.compile(
//   fs.readFileSync((__dirname, './views/email.hbs'), 'utf8')
// )

// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD
//   }
// })

// exports.confirmAccount = async (to, endpoint) => {
//   return await transporter.sendMail({
//     from: "'Elon Musk' <elon@musk.com>",
//     to,
//     subject: 'Confirm your account',
//     html: welcomeTemplate({ endpoint })
//   })
// }