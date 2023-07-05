let obj = require("../models/schema");
const deletedata = (datavalid, res) => {
    let id = datavalid.id;
    let data = obj.students;
    let matched = data.find((acc) => acc.id === id);
    let index = data.indexOf(matched);
    if (!matched) {
        console.log("error");
        res.send("error");
    }
    else {
        obj.students.splice(index,1);
        console.log(obj);
        res.send(obj);
    }
}

module.exports.deletedata = deletedata;
