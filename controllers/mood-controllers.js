const express = require('express');
const { MongooseDocument } = require('mongoose');
const router = express.Router();
const Mood = require("../services/mood-service");
const protected = require("../middlewares/protected")


router.post("/moods",protected, async (req, res) => {
    console.log(req.body)
    if (req.body.mood == null) {
        return res.status(400).send("missing body for moods")
    }
    if (req.body.mood > 0 && req.body.mood <= 5) {
        Mood.createMood(req.body.mood, req.body.tags,req.user.id)
        return res.status(201).end()   
    }
    else {
        return res.status(400).send("mood must be value 1-5")
    }

})
module.exports = router;