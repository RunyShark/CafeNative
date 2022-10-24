import React, {useContext} from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  AuthContext,
  AuthContextProps,
  ProductsContext,
  ProductsContextProps,
} from '../..';
import {ProductsStackParams} from '../../navigator/ProductsNav';
import {styles} from './style';

interface NavigationProps
  extends StackScreenProps<ProductsStackParams, 'ProductsScreen'> {}

export const ProductsScreen = ({navigation}: NavigationProps) => {
  const {user, logout} = useContext<AuthContextProps>(AuthContext);
  const {products} = useContext<ProductsContextProps>(ProductsContext);
  const {navigate} = navigation;

  //todo Pull to refresh

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <Text style={styles.title}>User: {user?.nombre}</Text>
      <FlatList
        data={products}
        renderItem={({item: {nombre, _id}}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate('ProductScreen', {id: _id, name: nombre})}>
            <Text style={styles.productName}>{nombre}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        keyExtractor={p => p._id}
      />

      <Button title="logout" color="#5856D6" onPress={logout} />
    </View>
  );
};
