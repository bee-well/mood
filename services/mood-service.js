const Mood = require ('../modal/moods');

    const createMood = async (mood, tags, user) => {
      console.log("updateting mood"); 
    
      try{
          const insertedMood = new Mood({
              user, 
              mood, 
              tags
          }); 
          await insertedMood.save()
      }
      catch (error) {
          console.log(error)
          throw new Error("could not save mood in database")
    
      }
    }

module.exports.createMood = createMood; 
