const mongoose = require('mongoose')

const foodMenuSchema = new mongoose.Schema(
  {
    foodName: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    foodPicture: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const FoodMenu = mongoose.model('FoodMenu', foodMenuSchema)

module.exports = FoodMenu
