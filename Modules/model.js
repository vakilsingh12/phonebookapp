const mongoose=require('mongoose');
const insertModel=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number
    },
    email:{
        type:String,
        unique:true,
        required:true,
    }

});
const model=new mongoose.model('insert',insertModel);
module.exports=model;
