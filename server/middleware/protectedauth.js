// const jwt= require('jsonwebtoken');
// const dotenv= require('dotenv');
// dotenv.config();
// const User = require('../models/User');

// const autheticate = async (req,res, next)=>{
//     //checking the token
//     const authHeader= req.header["auth-token"];

//     if (!authHeader){
//         return res.status(401).json({ message: 'unauthorised...' });
//     }
//     // if header is available then extract token for the same
    
// try {
//     //verifying and decoding the token
//     const data=jwt.verify(token, process.env.JWT_SECRET);
//     req.User=data.User
//         next(); 
    
// } catch (error) {
//     return res.status(401).json({ message: 'unauthorised...' });
  
// }
// }
// module.exports=autheticate;