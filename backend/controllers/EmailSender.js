const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/send-email', async (req, res) => {
  try {
    const {  subject, text } = req.body;

    // create a nodemailer transport object
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'mbelkarradi@gmail.com',
        pass: 'xfvoybpbzdedysht',
      },
    });


    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: 'mbelkarradi@gmail.com',
      to:'mbelkarradi@gmail.com',
      subject,
      text,
    });

    console.log('Message ENVOYÉ: %s', info.messageId);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to send email');
  }
});

module.exports = router;