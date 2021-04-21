const mood = require ('../modal/moods');

    const createMood = async (mood, tags) => {
        m = new Mood(mood, tags)
        try {
          await m.Save()
        } catch (err) {
          console.log(err);
        }
      },
      
    const createTag = async (mood, tags) => {
        t = new Tag(mood, tags)
        try {
          await t.Save()
        } catch (err) {
          console.log(err);
        }
      }
      

module.exports.createMood = createMood
module.exports.createTag = createTag
