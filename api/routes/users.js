const router = require('express').Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require('bcrypt');

//UPDATE
router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {

        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new: true});
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }

    } else {
        res.status(401).json("You can update only your account!")
    }

})


//DELETE

router.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {

            const user = await User.findById(req.body.userId);
            !user && res.status(400).json("Wrong credentials!");

            const validate = await bcrypt.compare(req.body.password, user.password);
            !validate && res.status(400).json("Wrong credentials!");

            try {
                //deleted users posts
                await Post.deleteMany({username: user.username})
                //deleted user account
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("User has been deleted...");
            } catch (err) {
                res.status(500).json(err);
            }

        } catch (err) {
            res.status(500).json(err);
        }

    } else {
        res.status(401).json("You can delete only your account!")
    }

})


//GET USER
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, email, ...other} = user._doc;
        res.status(200).json(other);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;