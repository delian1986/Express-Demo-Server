const Order=require('../models/Order')
const Product=require('../models/Product')
module.exports = {
   placeGet:async(req,res)=>{
       const productId=req.params.id
       try {
           const product=await Product.findById(productId)
           res.render('order/place',product)
           

       } catch (e) {
       
       }
   }
}