import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { API_URL } from 'react-native-dotenv';
import { setContext } from '@apollo/client/link/context';

import { getToken } from '../utils/async-storage';

const httpLink = createHttpLink({
  uri: `${API_URL}/graphql`,
});

const authLink = setContext(async (_, { headers }) => {
  try {
    const token = await getToken();
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  } catch (error) {
    console.warn('Set Context Error: ', error);
    return {
      ...headers,
    };
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
