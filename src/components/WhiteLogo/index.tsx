import React from 'react';
import {styles} from './style';
import {Image, View} from 'react-native';

export const WhiteLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/react-logo-white.png')}
        style={styles.img}
      />
    </View>
  );
};
