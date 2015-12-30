
// Importo mi modelo student y la guardo en la variable Student.
var Student = require('../models/student');

// Exporto la funcion list.
exports.list = function(req, res){
	Student.find({}, function (err, students){
		if(err){
			res.send(err);
		}else{
			res.json(students);
		}
	});
};


// Exporto la funcion create.
exports.create = function(req, res){
	var student = new Student({
		firstname: req.body.firstname,  
		lastname: req.body.lastname, 
		photo: req.body.photo, 
		sex: req.body.sex, 	
		years: req.body.years, 
		phone: req.body.phone, 
		country: req.body.country
	});

	student.save(function (err){
		if(err){
			res.send(err);
		}else{
			// res.json(student);
			console.log(student);
			// res.render('index');
			res.redirect('/');
		}
	});
};


// Exporto la funcion studentByID.
exports.studentByID = function(req, res){
	var id = req.params.id;

	Student.findById(id, function (err, student){
		if(err){
			res.send(err);
		}else{
			console.log('Get /students/' + id);
			res.json(student);
		}
	});
};


// Exporto la funcion update.
exports.update = function(req, res){
	var id = req.params.id;

	var data = {
        firstname: req.body.firstname,  
        lastname: req.body.lastname, 
        photo: req.body.photo, 
        sex: req.body.sex,  
        years: req.body.years, 
        phone: req.body.phone, 
        country: req.body.country
    };

	Student.findByIdAndUpdate(id, data, function (err, student){
		if(err){ throw err; }
		res.json(student);
	});
};


// Exporto una funcion delete.
exports.delete = function(req, res){
	var id = req.params.id;
	Student.findByIdAndRemove(id, function (err, student){
		if(err){
			res.send(err);
		}else{
			console.log('removed' + id);
		}
	});
};


