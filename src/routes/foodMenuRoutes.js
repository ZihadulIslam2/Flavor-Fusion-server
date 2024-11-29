const express = require('express');
const { getAllFoodMenu, addNewMenu } = require('../controllers/foodMenuController');
const router = express.Router();


router.get("/all-foods", getAllFoodMenu )

router.post('/add-menu', addNewMenu)

module.exports = router