const {config} = require("../../modal/moods")
const {createMood} = require("../mood-service")
const {publish, mock} = require("../../mq/mq")

it("test of the save and pulblish calls", async () => {
    let publishWasCalled = false
    let saveWasCalled = false

    mock.mock = (queue, msg) => {
        publishWasCalled = true
        expect(queue).toEqual("moods")
        const event = JSON.parse(msg)
        expect(event.payload.user).toEqual(1)
        expect(event.payload.mood).toEqual(5)
        expect(event.payload.tags).toEqual(["happy", "excited"])
        expect(event.payload.reported).toEqual("2021-03-23")
        expect(event.type).toEqual("created")
    }
    config.model = class Mood {
        constructor({ user, mood, tags }) {
            this.user = user
            this.mood = mood
            this.tags = tags
            this.createdAt = "2021-03-23"

            expect(user).toEqual(1)
            expect(mood).toEqual(5)
            expect(tags).toEqual(["happy", "excited"])
        }
        save() {
            saveWasCalled = true
        }
    }
    await createMood(5, ["happy", "excited"], 1)
    expect(saveWasCalled).toEqual(true)
    expect(publishWasCalled).toEqual(true)
})