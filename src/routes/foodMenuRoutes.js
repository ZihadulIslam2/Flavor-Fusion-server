const express = require('express')
const {
  getAllFoodMenu,
  addNewMenu,
  deleteMenuItem,
} = require('../controllers/foodMenuController')
const {
  addReservation,
  allReservations, // Pluralized to match the naming convention
} = require('../controllers/reservation.controller')
const { getSignUpInfo } = require('../controllers/signup.controller')
const router = express.Router()

// Food menu routes
router.get('/all-foods', getAllFoodMenu) // Fetch all food menu items
router.post('/add-menu', addNewMenu) // Add a new menu item
router.delete('/delete/:id', deleteMenuItem )

// Reservation routes
router.post('/add-reservation', addReservation) // Add a new reservation
router.get('/all-reservations', allReservations) // Fetch all reservations

// signup 
router.post("/signup", getSignUpInfo)

module.exports = router
