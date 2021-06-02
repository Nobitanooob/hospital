const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const port=2000;

//routes

const patientRoutes = require("./routes/patient/auth");
const doctorRoutes = require("./routes/doctor/auth");
const doctorOperationRoutes =require("./routes/doctor/operation");


const patientOperationRoutes = require("./routes/patient/operation");

// const makeAppointmentRoutes = require("./routes/patient/operation");
//   const patientSettingRoutes = require("./routes/patient/operation");
//   const updateSettingsRoutes = require("./routes/patient/operation");
//   const allAppointmentsRoutes = require("./routes/patient/operation");
//   const completeAppointmentRoutes =require("./routes/patient/operation");
//   const getReviewsRoutes = require("./routes/patient/operation");

// const allPatientAppointmentsRoutes =require("./routes/doctor/operation");
// const doctorSettingRoutes = require("./routes/doctor/operation");
// const updateDoctorSettingsRoutes =require("./routes/doctor/operation");
// const approveAppointmentsRoutes =require("./routes/doctor/operation");
// const addReviewsRoutes =require("./routes/doctor/operation");
// const getDoctorReviewsRoutes =require("./routes/doctor/operation");


//environment variable or you can say constants
env.config();

// mongodb connection
// mongodb+srv://sanju:<password>@cluster0.mbzhi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0-shard-00-00.mbzhi.mongodb.net:27017,cluster0-shard-00-01.mbzhi.mongodb.net:27017,cluster0-shard-00-02.mbzhi.mongodb.net:27017/${process.env.MONGO_DB_DATABASE}?ssl=true&replicaSet=atlas-8mctft-shard-0&authSource=admin&retryWrites=true&w=majority
mongoose
  .connect(
    `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0-shard-00-00.mbzhi.mongodb.net:27017,cluster0-shard-00-01.mbzhi.mongodb.net:27017,cluster0-shard-00-02.mbzhi.mongodb.net:27017/${process.env.MONGO_DB_DATABASE}?ssl=true&replicaSet=atlas-8mctft-shard-0&authSource=admin&retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("Database connected");
  }).catch(()=>{
    console.log("Database not connected");
  });

app.use(cors());
app.use(express.json());

app.use("/api", doctorRoutes);
app.use("/api", doctorOperationRoutes);
app.use("/api", patientRoutes);
app.use("/api", patientOperationRoutes);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on port ${port}}`);
});

