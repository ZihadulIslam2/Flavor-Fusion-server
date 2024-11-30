const { default: mongoose } = require('mongoose')

const reservationSchema = mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true, // Removes extra spaces
    },
    phoneNumber: {
      type: String, // Phone numbers are better represented as strings
      required: true,
    },
    personNumber: {
      type: Number,
      required: true,
      min: 1, // Minimum number of persons
    },
    dateOfReservation: {
      type: Date, // Use Date for date fields
      required: true,
    },
    timeOfReservation: {
      type: String, // Store time as string or use a Date object
      required: true,
    },
    message: {
      type: String, // Messages are typically strings
      trim: true, // Removes extra spaces
    },
  },
  { timestamps: true }
)

const Reservation = mongoose.model('Reservation', reservationSchema)

module.exports = Reservation
