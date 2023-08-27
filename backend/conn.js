const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/SchoolForm",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    family:4
}).then(()=>{console.log("connection Successful!!")})
  .catch((err)=>{console.log(err)});

// Schema in conn
 
const DataSchema=new mongoose.Schema({
    name:String,
    fname:String,
    grade:String,
    homephone:Number,
    cellphone:Number,
    workphone:Number,
    address:String
});

  // Model in Conn
  const Student=new mongoose.model("StudentData",DataSchema);
  module.exports=Student;