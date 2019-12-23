const express = require('express');
const router = express.Router();

// Task Model
const Notes = require('../models/notes');



// GET all Clients
router.get('/', async (req, res) => {
  const notes = await Notes.find();
  res.json(notes);
});


// GET all Clients
router.get('/:id', async (req, res) => {
  const note = await Notes.findById(req.params.id);
  res.json(note);
});


// ADD a new client
router.post('/', async (req, res) => {
  const { Titulo, Responsable, Descripcion, Prioridad } = req.body;
  const note = new Notes({Titulo, Responsable, Descripcion, Prioridad});
  await note.save();
  res.json({status: 'Nota añadida'});
});





router.delete('/:id', async (req, res) => {
  await Notes.findByIdAndRemove(req.params.id);
  res.json({status: 'Nota eliminada'});

  
});

module.exports = router;
