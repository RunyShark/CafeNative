import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext, AuthContextProps} from '../..';
import {ProductsStackParams} from '../../navigator/ProductsNav';
import {styles} from './style';
interface NavigationProps
  extends StackScreenProps<ProductsStackParams, 'ProductScreen'> {}

export const ProductScreen = ({route}: NavigationProps) => {
  const {logout} = useContext<AuthContextProps>(AuthContext);
  const {params} = route;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Protected Screen</Text>
      <Text style={styles.title}>Id: {params?.id}</Text>
      <Text style={styles.title}>Name: {params?.name}</Text>
      <Button title="logout" color="#5856D6" onPress={logout} />
    </View>
  );
};
