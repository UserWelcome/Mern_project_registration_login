
const express = require('express');
const dotenv= require('dotenv');
const mongoose=require('mongoose'); 
const cors = require('cors'); 

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

//for connecting database
mongoose.connect(process.env.MONGO_URL )
.then(()=> console.log("Connected to DB...."))
.catch((error)=> console.log("Error in connection" ,error))

//middleware
app.use (cors());
app.use(express.json());

//routes importing
app.use('/api/auth', require('./routes/auth_routes'));
app.use('/api/user', require('./routes/user_routes'));
app.use('/api/sale',require('./routes/sale_routes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
