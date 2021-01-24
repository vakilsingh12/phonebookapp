const express=require('express');
const app=express();
const path=require('path');
var bodyParser=require('body-parser');
const port =process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require('./Modules/db');
app.set("view engine",'ejs');
const home=require('./routers/Home');
const public=path.join(__dirname,'public');
app.use(express.static(public))
app.use('/',home);
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})