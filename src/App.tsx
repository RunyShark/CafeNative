import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  Navigator,
  AuthProvider,
  ProviderProps,
  ProductsProvider,
} from '../src/index';

const AppState = ({children}: ProviderProps) => (
  <AuthProvider>
    <ProductsProvider>{children}</ProductsProvider>
  </AuthProvider>
);

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
