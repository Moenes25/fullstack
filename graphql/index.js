import {
  GraphQLObjectType,
  GraphQLSchema
} from'graphql';
import mutations from './mutations';
import query from './product/query';

export default new GraphQLSchema({
  query:new GraphQLObjectType({
      name:'Query',
      fields:query
  }),
  mutation:new GraphQLObjectType({
      name:'Mutations',
      fields:mutations
  })
});