import React from 'react';
import { StyleSheet, Image, SafeAreaView, StatusBar, Platform, View, ImageBackground } from 'react-native';
import BaseText from './../../component/text/BaseText';
import Button from '../../../app/component/button/Button'
import onBoard from '../../../assets/onboardScrn.png'
export default function OnboardScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={onBoard} style={styles.image}>

      <View style={styles.content}>

    <View style={styles.textContainer}>

      <BaseText  >Become a consultant and schedule appointments with patients instantly  </BaseText>
      <BaseText  >Become a consultant and schedule appointments with patients instantly  </BaseText>
    </View>


      <View style={styles.getStarted}>

      <Button onPress={() =>navigation.navigate('Welcome')}>Get Started</Button>
      </View>
      </View>
      </ImageBackground>
    </SafeAreaView>
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
