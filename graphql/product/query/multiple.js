import{
  GraphQLList
}from'graphql';
import { productType } from'../../types/product';
import ProductModel from'../../../models/product';

export default{
  type:new GraphQLList(productType),
  resolve(){
      const products = ProductsModel.find().exec();
      if(!products){
          throw new Error('Error while fetching products..');
      }
      return products;
  }
}