let mongoose=require('mongoose');
let productSchema=mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    product_name:{
        type:String,
        required:true
    },
    price:{
      type:String,
      required:true
    },
    picture:{
      type:String,
      required:true
    },
   

});
let Product=module.exports=mongoose.model('Product',productSchema);
