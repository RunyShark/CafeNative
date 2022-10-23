import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from '../../';
import {styles} from './style';

export const ProtectedScreen = () => {
  const {user, toke, logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Protected Screen</Text>
      <Button title="logout" color="#5856D6" onPress={logout} />
    </View>
  );
};
