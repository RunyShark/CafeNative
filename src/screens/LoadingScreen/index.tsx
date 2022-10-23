import React from 'react';
import {Text} from 'react-native';

import {Background, WhiteLogo, loginStyles} from '../../';

export const LoadingScreen = () => {
  return (
    <>
      <Background />
      <WhiteLogo />
      <Text style={loginStyles.title}>Login</Text>
    </>
  );
};
