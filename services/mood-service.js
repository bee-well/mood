const Mood = require ('../modal/moods');
const {publish} = require("../mq/mq")

const createMood = async (mood, tags, user) => {
    try{
        const insertedMood = new Mood({
            user, 
            mood, 
            tags
        }); 
        await insertedMood.save()
        await publish("moods", JSON.stringify({
            type: "created",
            payload: {
                user: insertedMood.user,
                mood: insertedMood.mood,
                tags: insertedMood.tags,
                reported: insertedMood.createdAt
            }
        }))
    } catch (error) {
        throw error
    }   
}

module.exports.createMood = createMood
