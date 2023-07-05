require("dotenv").config();
const auth = process.env.secret_key;
const authtoken = (req,res,next)=>{
       console.log(auth);
       next();
}

module.exports.authtoken=authtoken;