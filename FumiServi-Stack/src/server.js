
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const nodemailer = require('nodemailer');


// Db connection
const { mongoose } = require('./database');

// Settings 
app.set('port', process.env.PORT || 3000);

// Middlewares

app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/tasks', require('./routes/task.routes'));
app.use('/api/client', require('./routes/client.routes'));
app.use('/api/worker', require('./routes/worker.routes'));
app.use('/api/notes', require('./routes/notes.routes'));

app.use('/Contrato', (express.static(path.join(__dirname, 'public'))));
app.use('/Admin', (express.static(path.join(__dirname, 'public'))));
app.use('/Register', (express.static(path.join(__dirname, 'public'))));
app.use('/cdu', (express.static(path.join(__dirname, 'public'))));
app.use('/Worker', (express.static(path.join(__dirname, 'public'))));
app.use('/de', (express.static(path.join(__dirname, 'public'))));
app.use('/Client', (express.static(path.join(__dirname, 'public'))));
app.use('/Tareas', (express.static(path.join(__dirname, 'public'))));
// Static Files
app.use(express.static(path.join(__dirname, 'public')));;


// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});

//mailer


app.post('/enviar', (req, res)=>{
  const transporter = nodemailer.createTransport({
    service : 'gmail',
    auth: {
        user: 'fumiservi8@gmail.com',
        pass: 'victor543'
    }
});


  let info = transporter.sendMail({
    from: '"Fumigaciones y Servicios DG 👻" <FumiServi8@gmail.com>', // sender address
    to: req.body.Email, // list of receivers
    subject: "SOLICITUD RECIBIDA", // Subject line
    text: "Fumigaciones y Servicios DG. Hemos recibido tu solicitud con exito, en las proximas 48 horas nos comunicaremos contigo. Gracias por preferinos. " // plain text body
    
  });
  console.log(req.body.Email)
  console.log("Message sent: %s", info.messageId);
 

 
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
 


main().catch(console.error);
});
