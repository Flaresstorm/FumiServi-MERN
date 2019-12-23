const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
  Nombre: { type: String, required: true },
  Cedula: { type: Number, required: true }, 
  Email: { type: String, required: true },
  Telefono: { type: Number, required: true },
  Direccion: { type: String, required: true }
  

});

module.exports = mongoose.model('Worker', TaskSchema);
