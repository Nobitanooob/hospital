const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new mongoose.Schema(
  {
    uniqueAppointment: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
      lowercase: true,
    },
    patientId: {
      type: String,
      required: true,
    },

    patientName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
     adhar: {
       type: Number,
     },
    fever: {
      type: String,
    },
    grade: {
      type: Number,
    },
    respiratory: {
      type: Number,
    },
    chest: {
      type: String,
    },
    diagnosis: {
      type: String,
    },
    observation: {
      type: String,
    },
    fileUrl: [Schema.Types.Mixed],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointments", appointmentSchema);
