const createMoodDao = require ('../modal/moods');
const {publish} = require("../mq/mq")

const createMood = async (mood, tags, user) => {
    try{
        const model = createMoodDao()
        const createdAt = new Date()
        const insertedMood = new model({
            user, 
            mood, 
            tags,
            createdAt
        }); 
        await insertedMood.save()
        const event = {
            type: "created",
            payload: {
                user,
                mood: insertedMood.mood,
                tags: insertedMood.tags,
                reported: insertedMood.createdAt
            }
        }
        
        await publish("moods", JSON.stringify(event))
    } catch (error) {
        throw error
    }   
}

module.exports.createMood = createMood
