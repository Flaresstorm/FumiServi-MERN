const mongoose = require('mongoose');

const { Schema } = mongoose;



const TaskSchema = new Schema({
  
  

  Nombre: { type: String, required: true },
  Cedula: { type: Number, required: true },
  Telefono: { type: Number, required: true },
  Email: { type: String, required: true },
  Servicio: { type: String, required: true },
  Estatus: { type: String, required: true },
  Fecha : {type: String, default: Date},

});

module.exports = mongoose.model('Task', TaskSchema);
