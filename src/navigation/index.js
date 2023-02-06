import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/LoginScreen/Login';
import SignUp from '../screens/SignUpScreen/SignUp';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import NewPassword from '../screens/NewPassword/NewPassword';
import Home from '../screens/Home/Home';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, contentStyle: {backgroundColor: '#221548'}}}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='SignIn' component={SignUp} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
            <Stack.Screen name='NewPassword' component={NewPassword} />
            <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;