import {
  GraphQLNonNull
}from'graphql';


import{productType,productInputType}from '../../types/product';
import ProductModel from'../../../models/product';
export default{
  type:productType,
  args:{
      data:{
          name:'data',
          type:new GraphQLNonNull(productInputType)
      }
  },
  resolve(root,params){
      const uModel=new ProductModel(params.data);
      const newProduct=uModel.save();
      if(!newProduct){
          throw new Error('Error adding product');
      }
return newProduct;
  }
}