/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {KeyboardAvoidingView, Text, View, Keyboard, Alert} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

import {Background, WhiteLogo, loginStyles, useForm, AuthContext} from '../../';

interface InitialForm {
  email: string;
  password: string;
}
const formState: InitialForm = {
  email: 'test1@test.com',
  password: '123456',
};

interface NavigationProps extends StackScreenProps<any, any> {}

export const LoadingScreen = ({navigation}: NavigationProps) => {
  const {email, password, onChange} = useForm<InitialForm>(formState);
  const {dismiss} = Keyboard;
  const {replace} = navigation;

  const {singIn, errorMessage, removeError} = useContext(AuthContext);

  useEffect(() => {
    if (errorMessage.length === 0) {
      return;
    }

    Alert.alert('Login bad:', errorMessage, [
      {
        text: 'ok',
        onPress: removeError,
      },
    ]);
  }, [errorMessage]);

  const onLogin = async () => {
    console.log('res', {email, password});
    const result = await singIn({correo: email, password});
    console.log('result', result);
    dismiss();
  };

  return (
    <>
      <Background />
      <KeyboardAvoidingView style={{flex: 1}}>
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
            onChangeText={value => onChange(value, 'email')}
            value={email}
            onSubmitEditing={onLogin}
            autoCorrect={false}
          />
          <Text style={loginStyles.label}>Password:</Text>
          <TextInput
            placeholder="****"
            placeholderTextColor={'rgba(255,255,255,0.4)'}
            underlineColorAndroid={'white'}
            style={loginStyles.inputField}
            selectionColor="white"
            onChangeText={value => onChange(value, 'password')}
            value={password}
            secureTextEntry
            onSubmitEditing={onLogin}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.button}
              onPress={onLogin}>
              <Text style={loginStyles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={loginStyles.newUserContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => replace('RegisterScreen')}>
              <Text style={loginStyles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
