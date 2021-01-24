const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://vakil:vakil@cluster0.7hhkx.mongodb.net/vakil?retryWrites=true&w=majority",{
    useUnifiedTopology:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useCreateIndex:true,
}).then(()=>{
    console.log("database connected")
}).catch((err)=>{
    console.log(err);
})