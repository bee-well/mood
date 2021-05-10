const createMoodDao = require ('../modal/moods');
const {publish} = require("../mq/mq")

const createMood = async (mood, tags, user) => {
    try{
        const model = createMoodDao()
        const insertedMood = new model({
            user, 
            mood, 
            tags,
        }); 
        await insertedMood.save()
        
        const reported = new Date(insertedMood.createdAt)
        reported.setHours(reported.getHours() + 2)
        
        const event = {
            type: "created",
            payload: {
                user,
                mood: insertedMood.mood,
                tags: insertedMood.tags,
                reported
            }
        }
        
        await publish("moods", JSON.stringify(event))
    } catch (error) {
        throw error
    }   
}

module.exports.createMood = createMood
