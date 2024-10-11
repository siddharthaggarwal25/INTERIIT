const HttpError = require("../utils/Http-Error");

const HostProject = (req ,res, next) =>{
    res.send("hosted project");
}

exports.HostProject = HostProject