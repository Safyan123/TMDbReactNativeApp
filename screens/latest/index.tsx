import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LatestScreen from './LatestScreen';
import DetailScreen from '../detail/DetailScreen';


const LatestStack = () => {
  const Stack = createStackNavigator();
  return <Stack.Navigator>
    <Stack.Screen name="Latest" component={LatestScreen} options={{ headerShown: true }} />
    <Stack.Screen name="Details" component={DetailScreen} options={{ headerShown: true }} />
  </Stack.Navigator>
}

export default LatestStack