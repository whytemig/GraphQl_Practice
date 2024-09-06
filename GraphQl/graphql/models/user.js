import { ObjectId } from "mongodb";

export const typeDefs = `#graphql  
type Query{
    user:User
    movies:[Movies!]!
    movieId(id:String!):[Movies!]!

}
type Mutation{
    createUser(user:Userfield!):User
    createAmovie(movie:AMovie!):[Movies!]!
}

"input"
input Userfield{
    name:String
    age:Int
}

input AMovie{
  id: String!
  plot: String
}


"types"
type User{
        id:Int
        name:String
        age:Int
    }
    
    
    type Movies{
        id: String
        plot:String
        genres:[String]
        poster:String
        title:String
    }`;

export const userResolvers = {
  Query: {
    movies: (_, __, { data }) => {
      return data;
    },
    movieId: (_, { id }, { data }) => {
      let idString = new ObjectId(id);
      let result = data?.filter((mo) => mo._id.equals(idString));

      return result;
    },
  },
  Mutation: {
    createUser: (_, { user }, { data }) => {},
    createAmovie: async (_, { movie }, { data }) => {
      const response = await data.insertOne(movie);
      console.log(response);
      return response;
    },
  },
  Movies: {
    id: (obj) => {
      return obj._id;
    },
  },
};
