const Doctor = require("../../models/doctor");
const Patient= require("../../models/patient");
const Appointment= require("../../models/appointments");
const shortid = require("shortid");
var ObjectId=require('mongodb').ObjectId;


// @route 	GET /api/doctor/allAppointments/:id
// @desc 	Get all appointments

exports.allPatientAppointments = async(req, res) => {
	
		    try{
		    const PatientList = await Appointment.find({}).exec();
		
		    return res.json({
		      patientList: PatientList
		    });
		    }
		    catch(err){
		        console.log("Fetching Doctor failed ..!");
		
				return res.json({
					error: err
				  });
		    }
		  };

// @route 	GET /api/doctors/doctorSetting/:id
// @desc 	Get settings from db
// @access 	Private
/*
exports.doctorSetting = (req, res) => {
		Doctor.findById(req.params.id)
			.then(doc => {
				if (doc) {
					res.send(doc);
				}
			})
			.catch(err => console.log(err));
	};



// @route 	POST /api/doctor/updateSettings
// @desc 	Update, set settings for doctor
// @access 	Private

exports.updateDoctorSettings =(req, res) => {
	const newUser = req.body.settings;
	Doctor.findOneAndUpdate({"_id": new ObjectId(req.params.id)},newUser,{new:true,upsert: true},function(err,pat){
		if(err){
			return res.send({error: err});
		}
		console.log(newUser);
		return res.send('Succesfully saved.');
	});		
};

// @route 	GET /api/doctors/appointments/:id
// @desc 	Get appointments from db
// @access 	Private

exports.approveAppointments = (req, res) => {

	Appointment.find({ $and :[{ patientId: req.body.patientId ,doctorId: req.body.doctorId }]}).exec(async (error, appointment) => {
		if (appointment)
		{
	      appointment.status= req.body.status;		
          appointment.save();
		  return res.json({
			message: "Appointment for this patient is approved",
		  });
		};
		return res.send('something went wrong');
	});
};
// @route 	POST /api/doctors/appointments/add
// @desc 	Adding appointments to both users
// @access 	Private

exports.addReviews =(req, res) => {
		const { doctorID, patientID, review } = req.body;
		Appointment.find({ $and :[{ patientId: req.body.patientId ,doctorId: req.body.doctorId }]}).exec(async (error, appointment) => {
			if (appointment)
			{
				appointment.reviews.push(review);
				appointment.save();
			  return res.json({
				message: "Review added Successfully",
			  });
			};
			return res.send('something went wrong');
		});
	};

exports.getDoctorReviews = (req, res) => {
		Appointment.findById(req.params.id)
			.then(appointment => {
				if (appointment) {
					res.send(appointment.reviews);
				}
			})
			.catch(err => {
				console.log(err);
				res.send({error: err});
			}) ; 
	};
	*/