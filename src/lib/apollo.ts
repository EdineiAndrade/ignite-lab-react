import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
 uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8mn7l148n01xr5zqv41uj/master',
 cache: new InMemoryCache()
})  
