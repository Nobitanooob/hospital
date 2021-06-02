
const Doctor = require("../../models/doctor");
const Patient = require("../../models/patient");
const Appointment = require("../../models/appointments");
var ObjectId = require('mongodb').ObjectID;
const shortid = require("shortid");

// exports.doctorPresent = async (req, res) => 
// {
//     try{
//     const DoctorList = await Doctor.find({}).exec();
//     return res.json({
//       doctorList: DoctorList
//     });
//     }
//     catch(err){
//         console.log("Fetching Doctor failed ..!");
// 		res.send({error: err})
//     }
//   };
  
 // @route 	POST /api/patients/makeAppointment
// @desc 	patient ask for appointment to doctor
// @desc		
// @access 	Private

exports.makeAppointment = (req, res) => {

	    const newUser = req.body;
	
		Appointment.findOneAndUpdate({"patientId": new ObjectId(req.body.patientId)},newUser,{new:true,upsert: true},function(err,pat)
		{		
		   // consoloe.log(pat);	
		   if(pat)
		   {
			return res.json({
				message : " Your details updated successfully.!",
			  });
			}
			 if(err)
			 {
				const { patientId,patientName, age,fever, grade,adhar,respiratory,chest,diagnosis,observation,fileUrl} = req.body;
				const _appointment = new Appointment({
			
				  uniqueAppointment: shortid.generate(),	  
				  patientId:patientId,
					patientName:patientName,
					age:age,
				  adhar:adhar,
					fever:fever,
					grade:grade,
					respiratory:respiratory,
					chest :chest,
					diagnosis: diagnosis,
					observation:observation,
					fileUrl:fileUrl
				});
			
				_appointment.save((error, data) => {
				  if (error) {
					//   console.log(error);
					return res.json({
					  error: "Something went wrong in saving of form",
					});
				  }
			
				  if (data) {
				   
					return res.json({
					  message : " Thanks for filling the form, Your data saved successfully !",
					});
				  }
				});
			  
			};		
			 }

	/*
		const { patientId,patientName, age,fever, grade,adhar,respiratory,chest,diagnosis,observation,fileUrl} = req.body;
		const _appointment = new Appointment({
	
		  uniqueAppointment: shortid.generate(),	  
		  patientId:patientId,
            patientName:patientName,
            age:age,
          adhar:adhar,
            fever:fever,
            grade:grade,
            respiratory:respiratory,
            chest :chest,
            diagnosis: diagnosis,
            observation:observation,
            fileUrl:fileUrl
		});
	
		_appointment.save((error, data) => {
		  if (error) {
			//   console.log(error);
			return res.json({
			  error: "Something went wrong in saving of form",
			});
		  }
	
		  if (data) {
		   
			return res.json({
			  message : " Thanks for filling the form, Your data saved successfully !",
			});
		  }
		});
		*/
	  
		)};


  // @route 	GET /api/patients/patientSettings/:id
// @desc 	Get patient`s settings, for filling forms, etc care@pnb.co.in ,01282256319,251938
// @access 	Private

// exports.patientSetting =(req, res) => {
// 		Patient.findById(req.params.id)
// 			.then(patient =>
// 			 {
// 				if (patient) 
// 				{
// 					res.send(patient);
// 				}
// 			})
// 			.catch(err => {
// 				console.log(err);
// 				res.send({error: err});
// 			})  
// 	};

// @route 	POST /api/patient/updateSettings
// @desc 	Update, set settings for patient
// @access 	Private

// exports.updateSettings =(req, res) => {
// 		const newUser = req.body.settings;
// 		Patient.findOneAndUpdate({"_id": new ObjectId(req.params.id)},newUser,{new:true,upsert: true},function(err,pat){
// 			if(err){
// 				return res.send({error: err});
// 			}
// 			console.log(newUser);
// 			return res.send('Succesfully saved.');
// 		});		
// 	};

// @route 	GET /api/patients/allAppointments/:id
// @desc 	Get all patient appointments
// @access 	Private

// exports.allAppointments = (req, res) => {
// 		Appointment.findById(req.params.id)
// 			.then(appointment => {
// 				if (appointment) {
// 					res.send(appointment);
// 				}
// 			})
// 			.catch(err => {
// 				console.log(err);
// 				res.send({error: err});
// 			}) ; 
// 	};

//@ post request for status completion of appointment

// exports.completeAppointments = (req, res) => {

// 	Appointment.find({ $and :[{ patientId: req.body.patientId ,doctorId: req.body.doctorId }]}).exec(async (error, appointment) => {
// 		if (appointment)
// 		{
// 	      appointment.status= req.body.status;		
//           appointment.save();
// 		  return res.json({
// 			message: "Patient appointment to this doctor has completed",
// 		  });
// 		};
// 		return res.send('something went wrong');
// 	});
// };

// exports.getReviews = (req, res) => {
// 	Appointment.findById(req.params.id)
// 		.then(appointment => {
// 			if (appointment) {
// 				res.send(appointment.reviews);
// 			}
// 		})
// 		.catch(err => {
// 			console.log(err);
// 			res.send({error: err});
// 		}) ; 
// };

