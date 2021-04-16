import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { API_URL } from 'react-native-dotenv';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: `${API_URL}/graphql`,
});

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('user-token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
