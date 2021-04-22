const express = require('express');
const { MongooseDocument } = require('mongoose');
const router = express.Router();
require("dotenv").config();
const Mood = require("../services/mood-service");

router.post("/moods", async (req, res) => {
    if (req.body.mood == null) {
        return res.status(400).send("missing body for moods")
    }
    if (req.body.mood > 0 && req.body.mood <= 5) {
        Mood.createMood(user, mood, tags);
    }
    else {
        return res.status(400).send("mood must be value 1-5");
    }

});

module.exports = router;
