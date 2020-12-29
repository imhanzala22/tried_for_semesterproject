const express=require('express');
const router =express.Router();

router.get( '/',(req,res)=>{
    res.send('sever is up and runing');
});


module.exports=router;
