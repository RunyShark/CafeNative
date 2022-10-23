import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext, LoadingScreen, ProtectedScreen, RegisterScreen} from '../';
const Stack = createStackNavigator();

export const Navigator = () => {
  const {status} = useContext(AuthContext);
  if (status === 'checking') {
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      {status !== 'authenticated' ? (
        <>
          <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
