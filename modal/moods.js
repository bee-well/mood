const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moodSchema = new Schema({
    id : int,
    user: int,
    mood: int,
    tags: string,
    timeStamp: true
 });

const Mood= mongoose.model('Mood', moodSchema);
module.exports = Mood;