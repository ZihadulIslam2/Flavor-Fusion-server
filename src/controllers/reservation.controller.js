const Reservation = require('../models/reservation.model')

const addReservation = async (req, res) => {
  try {
    const {
      customerName,
      phoneNumber,
      personNumber,
      dateOfReservation,
      timeOfReservation,
      message,
    } = req.body

    // Validate input
    if (
      !customerName ||
      !phoneNumber ||
      !personNumber ||
      !dateOfReservation ||
      !timeOfReservation
    ) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    // Create a new reservation
    const newReservationInfo = new Reservation({
      customerName,
      phoneNumber,
      personNumber,
      dateOfReservation,
      timeOfReservation,
      message,
    })

    // Save the reservation to the database
    await newReservationInfo.save()

    // Send a success response
    res.status(201).json({
      message: 'Reservation added successfully',
      reservation: newReservationInfo,
    })
  } catch (error) {
    console.error('Failed to add reservation.', error)
    res.status(500).json({ message: 'Failed to add reservation' })
  }
}

const allReservations = async (req, res) => {
  try {
    const allReservation = await Reservation.find()

    if (!allReservation.length) {
      return res.status(200).json({ message: 'No reservations found.' })
    }

    res.status(200).json(allReservation)
  } catch (error) {
    console.error('Failed to get all reservations', error)
    res.status(500).json({ message: 'Failed to get all reservations' })
  }
}

module.exports = {
  addReservation,
  allReservations,
}
