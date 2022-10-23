import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Navigator, AuthProvider, ProviderProps} from '../src/index';

const AppState = ({children}: ProviderProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};

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
