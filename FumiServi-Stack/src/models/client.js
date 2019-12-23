const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClientSchema = new Schema({ 
  Cliente : {type: String, required: true},
  RIF: {type:String, required:true},
  ACliente : {type: String, required: true},
  TCliente: {type: Number, required: true}

});

module.exports = mongoose.model('Client', ClientSchema);
