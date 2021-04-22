const jwt = require("jsonwebtoken")

const protected = (req, res, next) => {
    const token = req.get("authorization")
    if (token === "") {
        return res.status(401).send("forbidden")
    }
    try {
        const user = jwt.verify(token, process.env.JWT_KEY)
        console.log(user)
        req.user = user
        next()
    } catch (err) {
        return res.status(401).send("forbidden")
    }
}
module.exports = protected;
