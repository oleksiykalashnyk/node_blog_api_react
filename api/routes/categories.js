const router = require('express').Router();
const Category = require("../models/Category");
const User = require("../models/User");



//CREATE NEW CATEGORY
router.post('/', async (req, res) => {

    const user = await User.findOne({username: req.body.username});
    !user && res.status(400).json("Wrong credentials!");

    const newCategory = new Category(req.body);

    try {
        const savedCategory = await newCategory.save();
        res.status(200).json(savedCategory);
    } catch (err) {
        res.status(500).json(err)
    }
});

//GET ALL CATEGORY
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json(err)
    }
});
module.exports = router;