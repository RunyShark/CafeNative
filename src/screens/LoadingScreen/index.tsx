import React from 'react';
import {Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

import {Background, WhiteLogo, loginStyles} from '../../';

export const LoadingScreen = () => {
  return (
    <>
      <Background />
      <View style={loginStyles.formContainer}>
        <WhiteLogo />
        <Text style={loginStyles.title}>Login</Text>
        <Text style={loginStyles.label}>Email:</Text>
        <TextInput
          placeholder="email"
          placeholderTextColor={'rgba(255,255,255,0.4)'}
          keyboardType="email-address"
          underlineColorAndroid={'white'}
          style={loginStyles.inputField}
          selectionColor="white"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={loginStyles.label}>Password:</Text>
        <TextInput
          placeholder="****"
          placeholderTextColor={'rgba(255,255,255,0.4)'}
          underlineColorAndroid={'white'}
          style={loginStyles.inputField}
          selectionColor="white"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity activeOpacity={0.8} style={loginStyles.button}>
            <Text style={loginStyles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={loginStyles.newUserContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => console.log('w')}>
            <Text style={loginStyles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
