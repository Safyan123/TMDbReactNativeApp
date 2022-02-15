import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PopularScreen from './PopularScreen';
import DetailScreen from '../detail/DetailScreen';

const PopularStack = () => {
  const Stack = createStackNavigator();
  return <Stack.Navigator>
    <Stack.Screen name="Popular" component={PopularScreen} options={{ headerShown: true }} />
    <Stack.Screen name="Details" component={DetailScreen} options={{ headerShown: true }} />
  </Stack.Navigator>
}

export default PopularStack