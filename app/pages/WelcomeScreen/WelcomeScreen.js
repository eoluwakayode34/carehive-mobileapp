import React from 'react';
import { StyleSheet, Image, SafeAreaView, StatusBar, Platform, View, ImageBackground } from 'react-native';
import BaseText from './../../component/text/BaseText';
import HeadingText from './../../component/text/HeadingText';
import SocialMediaButton from '../../../app/component/button/SocialMediaButton'
import Scrn from '../../../assets/Scrn.png'
import google from '../../../assets/google.png'
import apple from '../../../assets/apple.png'
import LinkText from '../../component/text/LinkText';
export default function WelcomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Scrn} style={styles.image}>

      <View style={styles.content}>

    <View style={styles.textContainer}>
      <HeadingText >Welcome Back</HeadingText>
    </View>

       
       <View style={{width: '100%' , paddingBottom: '8rem', paddingHorizontal: '1rem'}}>

        <SocialMediaButton onPress={() =>navigation.navigate('Onboard')}  textColor='white' imageSource={google} color='#DD4B39'>
        Sign up with Google </SocialMediaButton>
        <SocialMediaButton  onPress={() =>navigation.navigate('Onboard')}  textColor='white' imageSource={apple} color='#000'>
        Sign up with Apple
            </SocialMediaButton>
            </View>

        

      <View style={styles.getStarted}>
      <BaseText fontSize={14} >
      Don’t have an account?     </BaseText>
      <LinkText fontSize={14} onPress={() => alert('hello')}>Sign Up </LinkText>

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
    paddingBottom: '7rem',
    paddingVertical: '3rem',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%'

    
  },
  getStarted: {
    width: '100%',
    paddingHorizontal: '3rem',
    flexWrap: 'wrap'
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
    paddingBottom: '3rem',
    paddingTop: '1rem',
    justifyContent: 'flex-end'
  }
  
});
