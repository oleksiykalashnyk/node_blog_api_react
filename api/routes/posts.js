const router = require('express').Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require('bcrypt');

//CREATE NEW POST
router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    const user = await User.findOne({username: req.body.username});
    !user && res.status(400).json("Wrong credentials!");

    try {
        const savePost = await newPost.save();
        res.status(200).json(savePost);
    } catch (err) {
        res.status(500).json(err)
    }
})


//UPDATE POST
router.put('/:id', async (req, res) => {

})

//DELETE POST
router.delete('/:id', async (req, res) => {

})

//GET POST
router.get('/:id', async (req, res) => {

})

module.exports = router;