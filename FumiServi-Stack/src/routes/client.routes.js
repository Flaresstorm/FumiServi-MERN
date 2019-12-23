const express = require('express');
const router = express.Router();

// Task Model
const Client = require('../models/client');



// GET all Clients
router.get('/', async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});


// GET all Clients
router.get('/:id', async (req, res) => {
  const client = await Client.findById(req.params.id);
  res.json(client);
});


// ADD a new client
router.post('/', async (req, res) => {
  const { Cliente, ACliente, TCliente, RIF } = req.body;
  const client = new Client({Cliente, ACliente, TCliente, RIF});
  await client.save();
  res.json({status: 'Cliente Registrado'});
});


// UPDATE a new client
router.put('/:id', async (req, res) => {
  const { Cliente, ACliente, TCliente,RIF } = req.body;
  const newClient = {Cliente, ACliente, TCliente, RIF};
  await Client.findByIdAndUpdate(req.params.id, newClient);
  res.json({status: 'Registro Actualizado'});
});


router.delete('/:id', async (req, res) => {
  await Client.findByIdAndRemove(req.params.id);
  res.json({status: 'Registro Eliminado'});

  
});

module.exports = router;
