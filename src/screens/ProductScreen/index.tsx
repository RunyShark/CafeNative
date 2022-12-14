/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {ProductsStackParams} from '../../navigator/ProductsNav';
import {styles} from './style';
import {useGetCategorys} from '../../';
interface NavigationProps
  extends StackScreenProps<ProductsStackParams, 'ProductScreen'> {}

export const ProductScreen = ({route, navigation}: NavigationProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const {category} = useGetCategorys();
  const {params} = route;
  const {setOptions} = navigation;

  useEffect(() => {
    setOptions({
      title: params?.name ? params?.name : 'New product',
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Protected Screen</Text>
      <ScrollView>
        <Text style={styles.label}>Name product: {params?.name}</Text>
        <TextInput placeholder="Product" style={styles.textInput} />

        <Text style={styles.label}>Select category:</Text>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={itemValue => setSelectedLanguage(itemValue)}>
          {category.map(({_id, nombre}) => (
            <Picker.Item key={_id} label={nombre} value={nombre} />
          ))}
        </Picker>
        <Button title="save" onPress={() => {}} color="#5856D6" />
        <View style={styles.subView}>
          <Button title="Camera" onPress={() => {}} color="#5856D6" />
          <View style={{width: 10}} />
          <Button title="Gallery" onPress={() => {}} color="#5856D6" />
        </View>
      </ScrollView>
    </View>
  );
};
