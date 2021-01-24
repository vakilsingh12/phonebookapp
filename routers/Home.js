const express=require('express');
const router=express.Router();
const dbModel=require('../Modules/model');
router.get('/',async(req,res)=>{
    try{
    var data=await dbModel.find({});
    res.render('index',{data1:data,msg:""})
    }catch(err){
        res.status(400).send(err)
    }
})

router.post('/',async(req,res)=>{
    try{
    var record=new dbModel({
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email
    }).sort({_id:-1});;
    await record.save()
    var data=await dbModel.find({});
    res.status(201).render('index',{data1:data,msg:""});
    }catch(err){
        res.status(400).send(err);
    }
})
router.get('/delete/:id',async(req,res)=>{
    try{
    const _id=req.params.id;
    await dbModel.findByIdAndDelete(_id);
    var data=await dbModel.find({});
    res.status(201).render('index',{data1:data});
    }catch(err){
        res.status(500).send(err);
    }
})
router.get('/update/:id',async(req,res)=>{
    try{
    var _id=req.params.id;
    var data=await dbModel.findById(_id);
    res.render('update',{edit:data});
  }catch(err){
    res.status(400).send(err);
  }
})
router.post('/update',async(req,res)=>{
    var data=await dbModel.findByIdAndUpdate(req.body.id,{
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
    },{new:true});
    await data.save();
    res.redirect('/');

})
router.post('/search',async(req,res)=>{
    try{
    var sname=req.body.sname;
    var semail=req.body.semail;
    console.log(semail)
    if(sname!='' && semail!=''){
        var filterPara={$and:[{name:sname},{email:semail}]}
    }else{
        filterPara={}
    }
    var data=await dbModel.find(filterPara);
    console.log(data)
    res.status(201).render('index',{data1:data});
    }catch(err){
        res.status(400).send(err);
    }
})
module.exports=router;