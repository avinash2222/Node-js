var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: "SMTP",
    host: "smtp.gmail.com",
    secure: false,
    user: 'avinashcat.singh2222@gmail.com',
    pass: 'Avinash0)'
  }
});

var mailOptions = {
  from: 'avinashcat.singh2222@gmail.com',
  to: 'durgaganj123@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was Avinash way to send mail!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});