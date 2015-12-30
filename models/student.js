var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Creo el esquema del studiante.
var StudentSchema = new Schema({
	firstname: String,
	lastname: String,
	photo: String,
	sex: String,	
	years: Number,
	phone: Number,
	country: String
});


// Exporto mi modelo Student.
module.exports = mongoose.model('Student', StudentSchema);