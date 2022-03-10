const jwt = require('jsonwebtoken')
module.exports = {
    authenToken: (req, res, next) => {
        const authorizationHeader = req.headers['authorization'];
        // Beaer [token]
        if (!authorizationHeader) return res.status(400).json({ messange: "no authorization" })
        else {
            const token = authorizationHeader.split(' ')[1];
            if (!token) res.sendStatus(401)
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
                console.log(err, data)
                if (err) res.sendStatus(403);
                next();
            })
        }
    }
}