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
        const event = {
            type: "created",
            payload: {
                user,
                mood: insertedMood.mood,
                tags: insertedMood.tags,
                reported: insertedMood.createdAt
            }
        }
        console.log(event)
        await publish("moods", JSON.stringify(event))
    } catch (error) {
        throw error
    }   
}

module.exports.createMood = createMood
