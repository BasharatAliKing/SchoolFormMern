const express=require("express");
const app=express();
const cors=require("cors");
require("./conn");
const Student=require("./conn");

app.use(cors());
app.use(express.json());


app.get("/" ,(req,res)=>{
    res.send("Hello from the other Side...");
});
app.post("/", async(req,res)=>{
    const data=req.body;
    const studentdata=new Student({
        name:data.name,
        fname:data.fname,
        grade:data.grade,
        homephone:data.homephone,
        cellphone:data.cellphone,
        workphone:data.workphone,
        address:data.address
    });
     const dataSave=await studentdata.save();
     res.status(201).send("Data is Submitted into Database");
})

app.listen(7000, ()=>{console.log("Listening from the port no 7000")});

