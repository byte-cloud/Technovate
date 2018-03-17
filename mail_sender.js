var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: '',
      pass: ''
    }
  });

  const mailOptions = {
    to: 'gauravw0407@gmail.com', // list of receivers
    subject: 'Sign Up for technovate', // Subject line
    html: '<a href="http://localhost:3000/auth/signup/gauravw0407@gmail.com">www.technovate.com/auth/signup</a>'// plain text body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });