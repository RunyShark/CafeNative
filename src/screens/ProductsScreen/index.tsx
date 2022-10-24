import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  AuthContext,
  AuthContextProps,
  ProductsContext,
  ProductsContextProps,
} from '../..';
import {styles} from './style';

interface NavigationProps extends StackScreenProps<any, any> {}

export const ProductsScreen = ({navigation}: NavigationProps) => {
  const {user, logout} = useContext<AuthContextProps>(AuthContext);
  const {products} = useContext<ProductsContextProps>(ProductsContext);
  const {navigate} = navigation;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <Text style={styles.title}>User: {user?.nombre}</Text>
      <FlatList
        data={products}
        renderItem={({item: {nombre}}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate('ProductScreen')}>
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
