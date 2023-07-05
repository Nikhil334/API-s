let obj = require("../models/schema");


const update = (datavalid, res, id) => {
    
    let data = obj.students;
    let matched = data.find((acc) => acc.id === id);
    let index = data.indexOf(matched);
    if (!matched) {
        console.log("error");
        res.send("error");
    }
    else {
        obj.students[index] = {...matched,...datavalid};
        console.log(obj);
        res.send(obj);
    }
}

module.exports.update = update;