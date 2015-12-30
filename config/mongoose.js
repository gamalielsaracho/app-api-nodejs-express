var mongoose = require('mongoose');

// Exporto una funcion por defecto..
module.exports = function(){
	mongoose.connect('mongodb://localhost/students', function (err, res){
		if(err){
			console.log('Error al conectar a la BD' + err);
		}else{
			console.log('Se conecto a la base de datos');
		}
	});
};
