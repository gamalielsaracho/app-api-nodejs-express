
var IndexCtrl = require('../controllers/index');

module.exports = function(app){
	app.route('/').get(IndexCtrl.render);
};
