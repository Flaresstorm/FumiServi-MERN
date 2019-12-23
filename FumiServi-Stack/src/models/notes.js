const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({ 
  Titulo : {type: String, required: true},
  Responsable: {type:String, required:true},
  Descripcion : {type: String, required: true},
  Prioridad: {type: String, required: true}

});

module.exports = mongoose.model('Notes', NotesSchema);