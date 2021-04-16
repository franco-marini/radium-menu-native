import { ApolloProvider } from '@apollo/client';
import React from 'react';

import Navigation from './navigation';
import client from './graphql';

const App = () => (
  <ApolloProvider client={client}>
    <Navigation />
  </ApolloProvider>
);

export default App;
