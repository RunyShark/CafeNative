import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductsScreen, ProductScreen} from '../';

export type ProductsStackParams = {
  ProductsScreen: undefined;
  ProductScreen: {id?: string; name?: string};
};

const Stack = createStackNavigator<ProductsStackParams>();

export const ProductsNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
};
