require("dotenv").config();
const express = require("express");
const homefile = require("./routes/home");
const registerfile = require("./routes/register");
const updatefile = require("./routes/update");
const deletefile = require("./routes/deletedata");
const patchfile = require("./routes/patch");
const auth = require("./middleware/middlemsg");

const app = express();

const port = process.env.PORT;
const sk = process.env.secret_key;

app.use(express.json());

app.get("/",(req,res)=>{
    homefile.home(res);
});

app.post("/register",auth.authtoken,(req,res)=>{
    registerfile.register(req.body,res);
});

app.put("/update/:id",(req,res)=>{
    const id = Number(req.params.id);
    updatefile.update(req.body,res,id);
});

app.patch("/update/:id",(req,res)=>{
    const id = Number(req.params.id);
    patchfile.update2(req.body,res,id);
});

app.delete("/delete",(req,res)=>{
    deletefile.deletedata(req.body,res);
});


app.listen(port,(err)=>{
    console.log(`I am listening at port number ${port}`);
})



