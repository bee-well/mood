const mood = require ('../modal/moods');

    const createMood = async (mood, tags, user) => {
      console.log("updateting mood"); 
    
      try{
          const insertedMood = new Mood ({
              user, 
              mood, 
              tags, 
          }); 
          await insertedMood.save; 
      }
      catch (error) {
          console.log(error);
          return res.status(500).send();
      }
      return res.status(200).send(); 
    }

module.exports.createMood = createMood; 
