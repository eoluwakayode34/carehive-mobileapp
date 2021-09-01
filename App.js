import React from 'react';
import { StyleSheet, Image, SafeAreaView, StatusBar, Platform, View, ImageBackground } from 'react-native';
import BaseText from './app/component/text/BaseText';
import Button from './app/component/button/Button'
import onBoard from './assets/onboardScrn.png'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardScreen from './app/pages/WelcomeScreen/OnboardScreen'
import RegisterScreen from './app/pages/WelcomeScreen/RegisterScreen'
import WelcomeScreen from './app/pages/WelcomeScreen/WelcomeScreen'


const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen   name='Onboard' component={OnboardScreen} />
        <Stack.Screen  name='Welcome'  component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : '0'
  
  },

  textContainer: {
    paddingBottom: '14rem',
    paddingVertical: '3rem',
    
  },
  getStarted: {
    width: '100%',
    paddingHorizontal: '3rem'
  },



  image: {
    flex: 1,
    width: '100%',
    height: '100%'
    
  },
  content: {
    flex: 2,
    alignItems: 'center',
    padding: '1rem',
    // backgroundColor: 'red',
    paddingVertical: '3rem',
    paddingTop: '5rem',
    justifyContent: 'flex-end'
  }
  
});
