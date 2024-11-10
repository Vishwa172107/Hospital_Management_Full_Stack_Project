const mongoose = require("mongoose")
main().catch(err => console.log(err))

async function main(){
    const link = process.env.MONGO_URI || "mongodb://localhost:27017/Hospital_db"
    await mongoose.connect(link)
}

const my_Schema = mongoose.Schema({
    name:String,
    photo:String,
    speciality:String,
    rating:Number
})

const my_model = mongoose.model("doctors_collection", my_Schema)

// const doctors = [
//     { name: 'Dr. John Doe', photo: '/d1.jpg', speciality: 'Cardiologist', rating: 4.8 },
//     { name: 'Dr. Jane Smith', photo: '/d2.jpg', speciality: 'Dermatologist', rating: 4.6 },
//     { name: 'Dr. Sarah Lee', photo: '/d3.jpg', speciality: 'Pediatrician', rating: 4.7 },
//     { name: 'Dr. Mike Johnson', photo: '/d4.jpg', speciality: 'Neurologist', rating: 4.9 },
//     { name: 'Dr. Ben 10', photo: '/d5.jpg', speciality: 'Physician', rating: 5.0 },
//     { name: 'Dr. Iron man', photo: '/d7.jpg', speciality: 'Nephrologist', rating: 4.5 },
//     { name: 'Dr. Natasha', photo: '/d6.jpg', speciality: 'Dentist', rating: 4.7 },
//     { name: 'Dr. Tony Tony Chopper', photo: '/d8.jpg', speciality: 'Physician', rating: 4.4 },
//   ];

//   my_model.insertMany(doctors)

const appointment_schema = mongoose.Schema({
    patientName:String,
    patientAge:Number,
    doctor:String,
    appointmentDate:Date,
    slot:String
})

const appointments = mongoose.model("appointments", appointment_schema)

const contact_schema = mongoose.Schema({
    name:String,
    email:String,
    message:String
})

const contact = mongoose.model("contacts", contact_schema)
module.exports = {my_model, appointments, contact}