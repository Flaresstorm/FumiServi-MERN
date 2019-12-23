const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
// Task Model
const Task = require('../models/task');


// GET all Tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});



// GET all Tasks
router.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});



// ADD a new task
router.post('/', async (req, res) => {
  const { Nombre, Cedula, Telefono, Email, Servicio, Estatus, Fecha } = req.body;
  const task = new Task({Nombre, Cedula, Telefono, Email, Servicio, Estatus, Fecha});
  await task.save();
  
  let transporter = nodemailer.createTransport({
    service: 'gmail',
     auth: {
         user: 'fumiservi8@gmail.com',
         pass: 'victor543'
     }
 });  
   let mailOptions = {
     from: '"Fumigaciones y Servicios DG 👻" <FumiServi8@gmail.com>',
     to: req.body.Email, 
     subject: "SOLICITUD RECIBIDA", 
     text: "Fumigaciones y Servicios DG. Hemos recibido tu solicitud con exito, en las proximas 48 horas nos comunicaremos contigo. Gracias por preferinos. "      
   }
 
   transporter.sendMail(mailOptions, function(err, data){
     if(err) {
         console.log('Error occurs')
     }else{
       
       app.use('/api/tasks', require('./routes/task.routes'));
       console.log('mail sent');
       
     }
   })
   res.json({status: 'Peticion Aceptada'});
});


// UPDATE a new task
router.put('/:id', async (req, res) => {
  const { Nombre, Cedula, Telefono, Email, Estatus, Servicio } = req.body;
  const newTask = {Nombre,  Cedula, Telefono, Email, Estatus, Servicio};
  await Task.findByIdAndUpdate(req.params.id, newTask);
  res.json({status: 'Registro Actualizado'});
});


router.delete('/:id', async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({status: 'Registro Eliminado'});

  
});



module.exports = router;
