/* eslint-disable react-native/no-inline-styles */
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {KeyboardAvoidingView, Text, View, Keyboard} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

import {Background, WhiteLogo, loginStyles, useForm} from '../../';

interface InitialForm {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}
const formState: InitialForm = {
  name: '',
  email: '',
  password: '',
  repeatPassword: '',
};

interface NavigationProps extends StackScreenProps<any, any> {}

export const RegisterScreen = ({navigation}: NavigationProps) => {
  const {
    email,
    name,
    repeatPassword,
    password,
    onChange,
  } = useForm<InitialForm>(formState);
  const {dismiss} = Keyboard;
  const {replace} = navigation;

  const onLogin = () => {
    console.log({email, password, name});
    dismiss();
  };

  return (
    <>
      <Background />
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={loginStyles.formContainer}>
          <WhiteLogo />
          <Text style={loginStyles.title}>Login</Text>
          <Text style={loginStyles.label}>name:</Text>
          <TextInput
            placeholder="Name"
            placeholderTextColor={'rgba(255,255,255,0.4)'}
            keyboardType="default"
            underlineColorAndroid={'white'}
            style={loginStyles.inputField}
            selectionColor="white"
            autoCapitalize="none"
            onChangeText={value => onChange(value, 'name')}
            value={name}
            onSubmitEditing={onLogin}
            autoCorrect={false}
          />
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
          <Text style={loginStyles.label}>Repeat password:</Text>
          <TextInput
            placeholder="****"
            placeholderTextColor={'rgba(255,255,255,0.4)'}
            underlineColorAndroid={'white'}
            style={loginStyles.inputField}
            selectionColor="white"
            onChangeText={value => onChange(value, 'repeatPassword')}
            value={repeatPassword}
            secureTextEntry
            onSubmitEditing={onLogin}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity activeOpacity={0.8} style={loginStyles.button}>
              <Text style={loginStyles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>

          <View style={loginStyles.newUserContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => replace('LoadingScreen')}>
              <Text style={loginStyles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
