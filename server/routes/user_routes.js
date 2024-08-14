const express= require('express');
//const autheticate = require('../middleware/protectedauth');
const router= express.Router();

router.get('/profile',(req,res)=>{

    res.send(req.user);//we will pass the user object to access
});

module.exports=router;