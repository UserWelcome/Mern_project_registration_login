const express= require('express');
const { addSales, topSales, totalRevenue } = require('../controllers/sale_controller');



const router= express.Router();

router.post('/addSales',  addSales);
router.get('/topSales',topSales);
router.get('/totalRevenue',totalRevenue);

module.exports=router;