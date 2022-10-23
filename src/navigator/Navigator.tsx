import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoadingScreen, LoginScreen, ProtectedScreen, RegisterScreen} from '../';
const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
