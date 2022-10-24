import React, {useContext} from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import {
  AuthContext,
  AuthContextProps,
  ProductsContext,
  ProductsContextProps,
} from '../..';
import {styles} from './style';

export const ProductsScreen = () => {
  const {user, logout} = useContext<AuthContextProps>(AuthContext);
  const {products} = useContext<ProductsContextProps>(ProductsContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <Text style={styles.title}>User: {user?.nombre}</Text>
      <FlatList
        data={products}
        renderItem={({item}) => console.log(item)}
        keyExtractor={item => item.productos}
      />

      <Button title="logout" color="#5856D6" onPress={logout} />
    </View>
  );
};
