const Sale = require('../models/Sale');
const dotenv = require('dotenv');
dotenv.config();

// Adding new sales entry
const addSales = async (req, res) => {
  try {
    let sales=await Sale.find({});
let id;
if(sales.length>0){
  let last_sale_arr=sales.slice(-1);
  let last_sale=last_sale_arr[0];
  is=last_sale.id+1;
}else{
  id=1;
}
    const { productName, quantity, amount } = req.body;
    const sale = new Sale({ productName, quantity, amount });
    await sale.save();
    return res.status(201).json({ success:true,message: 'Sale entry added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
// // Top 5 sales for today
const topSales = async (req, res) => {
  try {
    const topSales = await Sale.find().sort({ amount: -1 }).limit(5);
    res.status(200).json(topSales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
// Total  today revenue
const totalRevenue = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const salesToday = await Sale.aggregate([
      {
        $match: {
          createdAt: { $gte: today }
        }
      },
      {
        $group: {
          _id: null, total: { $sum: '$amount' }
        }
      }
    ]);
    if (salesToday.length > 0) {
      res.status(200).json({ totalRevenue: salesToday[0].total });
    } else {
      res.json({ totalRevenue: 0 });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
 
}
module.exports = { addSales, topSales, totalRevenue };