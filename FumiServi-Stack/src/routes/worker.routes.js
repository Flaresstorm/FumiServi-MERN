const express = require('express');
const router = express.Router();

// Task Model
const Worker = require('../models/worker');


// GET all Tasks
router.get('/', async (req, res) => {
  const workers = await Worker.find();
  res.json(workers);
});



// GET all Tasks
router.get('/:id', async (req, res) => {
  const worker = await Worker.findById(req.params.id);
  res.json(worker);
});



// ADD a new task
router.post('/', async (req, res) => {
  const { Nombre, Cedula, Telefono, Email, Direccion  } = req.body;
  const worker = new Worker({Nombre, Cedula, Telefono, Email, Direccion});
  await worker.save();
  res.json({status: 'Empleado Registrado'});
});


// UPDATE a new task
router.put('/:id', async (req, res) => {
  const { Nombre, Cedula, Telefono, Email, Direccion } = req.body;
  const newWorker = {Nombre, Cedula, Telefono, Email, Direccion};
  await Worker.findByIdAndUpdate(req.params.id, newWorker);
  res.json({status: 'Empleado Actualizado'});
});


router.delete('/:id', async (req, res) => {
  await Worker.findByIdAndRemove(req.params.id);
  res.json({status: 'Empleado Eliminado'});

  
});



module.exports = router;
