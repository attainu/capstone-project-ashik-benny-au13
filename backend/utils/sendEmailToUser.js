const nodemailer = require('nodemailer');

const sendEmailToUser = async options => {
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "64894ad46de9e1",
          pass: "169dd5674d57f9"
        }
      });

    const message = {
        from :"Ecommerce App <noreplay@gmail.com>" ,
        to : options.email,
        subject : options.subject,
        text : options.message
    };

    //send Email
    await transport.sendMail(message);

};

module.exports = sendEmailToUser;