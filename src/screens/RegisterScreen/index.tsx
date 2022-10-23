/* eslint-disable react-native/no-inline-styles */
import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {KeyboardAvoidingView, Text, View, Keyboard} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

import {WhiteLogo, loginStyles, useForm, AuthContext} from '../../';

interface InitialForm {
  name: string;
  email: string;
  password: string;
}
const formState: InitialForm = {
  name: '',
  email: '',
  password: '',
};

interface NavigationProps extends StackScreenProps<any, any> {}

export const RegisterScreen = ({navigation}: NavigationProps) => {
  const {email, name, password, onChange} = useForm<InitialForm>(formState);
  const {singIn} = useContext(AuthContext);
  const {dismiss} = Keyboard;
  const {replace} = navigation;

  const onRegister = async () => {
    console.log({email, password, name});
    singIn({correo: email, password, nombre: name});
    dismiss();
  };

  return (
    <>
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#5856D6'}}>
        <View style={loginStyles.formContainer}>
          <WhiteLogo />
          <Text style={loginStyles.title}>Register</Text>
          <Text style={loginStyles.label}>name:</Text>
          <TextInput
            placeholder="Insert your name"
            placeholderTextColor={'rgba(255,255,255,0.4)'}
            keyboardType="default"
            underlineColorAndroid={'white'}
            style={loginStyles.inputField}
            selectionColor="white"
            autoCapitalize="words"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'name')}
            value={name}
            onSubmitEditing={onRegister}
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
            onSubmitEditing={onRegister}
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
            onSubmitEditing={onRegister}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity activeOpacity={0.8} style={loginStyles.button}>
              <Text style={loginStyles.buttonText}>Create account</Text>
            </TouchableOpacity>
          </View>

          <View style={loginStyles.buttonReturn}>
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
