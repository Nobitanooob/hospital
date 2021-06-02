const express = require('express');
const { allPatientAppointments } = require('../../controller/doctor/doctor.action');
const { requireSignin } = require('../../common-middleware/index');
const router = express.Router();

router.get('/doctor/allPatient',allPatientAppointments);

module.exports = router;

/*
router.get('/doctor/doctorSetting/:id', doctorSetting);
router.post('/doctor/updateDoctorSettings/:id',updateDoctorSettings);
router.post('/doctor/approveAppointments',requireSignin,approveAppointments);
router.post('/doctor/addReviews',requireSignin,addReviews);
router.get('/doctor/getReviews',requireSignin, getDoctorReviews);

module.exports = router;


, doctorSetting ,updateDoctorSettings ,approveAppointments ,addReviews, getDoctorReviews

*/