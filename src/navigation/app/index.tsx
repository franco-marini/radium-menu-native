import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Foods from './Foods';

const AppStack = createStackNavigator();

const App: FC = () => (
  <AppStack.Navigator initialRouteName='Foods' headerMode='none'>
    <AppStack.Screen name='Foods' component={Foods} />
  </AppStack.Navigator>
);

export default App;
