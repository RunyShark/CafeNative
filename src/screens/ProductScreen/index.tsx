/* eslint-disable react-hooks/exhaustive-deps */
import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {AuthContext, AuthContextProps} from '../..';
import {ProductsStackParams} from '../../navigator/ProductsNav';
import {styles} from './style';
interface NavigationProps
  extends StackScreenProps<ProductsStackParams, 'ProductScreen'> {}

export const ProductScreen = ({route, navigation}: NavigationProps) => {
  const {logout} = useContext<AuthContextProps>(AuthContext);
  const {params} = route;
  const {setOptions, navigate} = navigation;

  useEffect(() => {
    setOptions({
      title: params?.name ? params?.name : 'New product',
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.options}
          onPress={() => navigate('ProductScreen', {name: 'New Product'})}>
          <Text>Add </Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Protected Screen</Text>
      <Text style={styles.title}>Id: {params?.id}</Text>
      <Text style={styles.title}>Name: {params?.name}</Text>
      <Button title="logout" color="#5856D6" onPress={logout} />
    </View>
  );
};
