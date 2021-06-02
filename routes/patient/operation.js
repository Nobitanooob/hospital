const express = require('express');
const {  makeAppointment} = require('../../controller/patient/patient.action');
const { requireSignin } = require('../../common-middleware');
const router = express.Router();

router.post('/patient/makeAppointment', makeAppointment);

// router.get('/patient/doctorPresent', doctorPresent);
// router.get('/patient/patientSetting/:id', patientSetting);
// router.post('/patient/updateSettings/:id', updateSettings);
// router.get('/patient/allAppointments/:id',requireSignin, allAppointments);
// router.post('/patient/completeAppointment',requireSignin, completeAppointments);
// router.get('/patient/getReviews/:id',requireSignin, getReviews);


module.exports = router;
