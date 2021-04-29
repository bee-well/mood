const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moodSchema = new Schema({
    user: Number,
    mood: Number,
    tags: [String]
}, { timestamps: true}
);

const config = {
   model: null
}

const createModel = () => {
    if(!config.model){
       config.model = mongoose.model("mood", moodSchema)
    }
    return config.model
}

module.exports = createModel
module.exports.config = config
