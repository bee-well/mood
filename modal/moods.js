const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moodSchema = new Schema({
    user: Number,
    mood: Number,
    tags: [String], 
    timeStamp: true
 });

 const config = {
    model: null
}
const createModel = () => {
    if (!config.model) {
        config.model = mongoose.model("Mood", mood)
    }
    return config.model
}
module.exports = createModel
