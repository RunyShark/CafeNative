import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext, AuthContextProps} from '../..';
import {styles} from './style';

export const ProductScreen = () => {
  const {user, logout} = useContext<AuthContextProps>(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Protected Screen</Text>
      <Text style={styles.title}>Name: {user?.nombre}</Text>
      <Button title="logout" color="#5856D6" onPress={logout} />
    </View>
  );
};
