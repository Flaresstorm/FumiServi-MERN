"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(){

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
 

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'breanne49@ethereal.email',
        pass: '15yr5DfxjjWFH5yabZ'
    }
});

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fumigaciones y Servicios DG 👻" <FumiServi8@gmail.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "SOLICITUD RECIBIDA", // Subject line
    text: "Fumigaciones y Servicios DG. Hemos recibido tu solicitud con exito, en las proximas 48 horas nos comunicaremos contigo. Gracias por preferinos. " // plain text body
    
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);