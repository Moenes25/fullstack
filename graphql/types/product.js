
import {GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList

}from 'graphql';
import ProductModel from'../../models/product';
import { resolve } from 'path';

export const productType=new GraphQLObjectType({
  name:'Product',
  description:'Product api',
  fields:()=>({
      id:{
          type:new GraphQLNonNull(GraphQLID)
      },
      product_name:{
          type:GraphQLString
      },
      picture:{
        type:GraphQLString
      },
      price:{
          type:GraphQLString
      }     
})
});
export const productInputType=new GraphQLInputObjectType({
  name:'ProductInput',
  description:'Insert Product',
  fields:()=>({
      id:{
          type:GraphQLString
      },
   product_name:{
          type:GraphQLString
      },
      picture:{
        type:GraphQLString
      },
      price:{
          type:GraphQLString
      }
 })

})