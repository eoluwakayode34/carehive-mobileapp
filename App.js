import React from 'react';
import { StyleSheet, Image, SafeAreaView, StatusBar, Platform, View } from 'react-native';
import BaseText from './app/component/BaseText';
import onBoard from './assets/onBoard.png'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={onBoard} style={styles.image} resizeMode='cover'  />

      <View style={styles.content}>

      <BaseText >Become a consultant and schedule appointments with patients instantly  </BaseText>
      </View>
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

  image: {
    flex: 2,
    width: '100%',
    
  },
  content: {
    flex: 3,
    justifyContent: 'center',
    padding: '1rem'
  }
  
});
