

const register =(data,res)=>{
    
    console.log(data);
    res.send(data);
}

module.exports.register = register;