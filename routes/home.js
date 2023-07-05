//const app = require("../server");
;

const home=(res)=>{
    res.send("Welcome to home page");
}

module.exports.home = home;