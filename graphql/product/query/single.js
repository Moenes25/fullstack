import{
  GraphQLID,
  GraphQLNonNull
}from 'graphql';
import{productType}from'../../types/product';
import ProductModel from'../../../models/product';
export default{
  type:productType,
  args:{
      id:{
          name:'ID',
          type: new GraphQLNonNull(GraphQLID)

      }
  },
  resolve(root,params){
      return ProductModel.findById(params.id).exec();
  }

}