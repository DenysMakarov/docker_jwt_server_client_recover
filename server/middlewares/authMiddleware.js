const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    if(req.method === 'OPTIONS'){
        next()
    }
    try{
        const token = req.headers.authorization.split(' ')[1] // [0] - Bearer
        if (!token){
          return res.status(401).json({msg: 'not a valid'})
        }

        const decode = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decode
        next()
    }
    catch (e) {
        res.status(401).json({msg: 'not a valid'})
    }
}