const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moodSchema = new Schema({
    user: Number,
    mood: Number,
    tags: [String]
 }, { timestamps: true}
 );
module.exports = mongoose.model("Mood", moodSchema)