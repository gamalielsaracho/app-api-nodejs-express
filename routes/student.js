
// Importo mi controlador student y la guardo el la variable StudentCtrl.
var StudentCtrl = require('../controllers/student');

// Exporto una funcion por defecto. 
module.exports = function(app){

	app.route('/students')
	   .post(StudentCtrl.create)
	   .get(StudentCtrl.list);

	app.route('/students/:id')
	   .get(StudentCtrl.studentByID)
	   .put(StudentCtrl.update)
	   .delete(StudentCtrl.delete);
};
