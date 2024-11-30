const FoodMenu = require("../models/foodMenu")

// get all foods menus
const getAllFoodMenu = async (req, res)=> {

    try {
      const foods = await FoodMenu.find().sort({ createdAt: -1});
      res.status(200).send(foods)
        
    } catch (error) {
        console.log("error fetching all menu data", error)
        res.status(500).send({
          message: "Fail to fetch foods menu"
        })
    }
}

const addNewMenu = async (req,res)=>{
  try {
    const { foodName, details, foodPicture } = req.body

    // valued the input
    if (!foodName || !details || !foodPicture ) {
      return res.status(400).json({message:"All field are required!"})
    }

    // create a new food item
    const newFood = new FoodMenu({ foodName, details, foodPicture })
    await newFood.save();

    res.status(201).json({message:"Food item added successfully.", food:newFood})


  } catch (error) {
    console.log("error adding new menu")
    res.status(500).send({
      message: "Fail to post a menu."
    })
  }
}

// delete a menu
// have to get the id from url
// set delete mathod for delete by id.

const deleteMenuItem = async (req, res) => {
  try {
    const { id } = req.params // Retrieve id from the route parameter
    if (!id) {
      return res
        .status(400)
        .send({ message: 'ID is required to delete an item' })
    }

    const deletedItem = await FoodMenu.findByIdAndDelete(id)

    if (!deletedItem) {
      return res.status(404).send({ message: 'Item not found' })
    }

    res
      .status(200)
      .send({ message: 'Item deleted successfully', item: deletedItem })
  } catch (error) {
    console.error('Failed to delete item.', error)
    res.status(500).send({ message: 'Failed to delete item', error })
  }
}



module.exports = {
  getAllFoodMenu,
  addNewMenu,
  deleteMenuItem,
}