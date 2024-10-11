const HttpError = require("../utils/Http-Error");
const signup =  (req , res, next)=>{
     res.send(" signup")
}

const login =( req , res, next) =>{
    res.send(" login")
}

const onbording = ( req, res, next) =>{

}

exports.signup = signup
exports.login = login
exports.onbording = onbording