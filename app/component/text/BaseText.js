import React from 'react';

import { Text,  StyleSheet } from 'react-native';

import {
  useFonts,
  
  JosefinSans_400Regular,
 
} from '@expo-google-fonts/josefin-sans';

const BaseText = ({children, fontSize = 18}) => {
  let [fontsLoaded] = useFonts({
 
    JosefinSans_400Regular
  
  });



  if (!fontsLoaded) {
    return <Text>laoding...</Text>;
  } else {
    return (
       
        <Text
        
          style={[ {fontSize: fontSize},styles.text]}>{children}</Text>

    );
  }
};


export default BaseText



const styles = StyleSheet.create({
    text: {
        letterSpacing: 1.3,     // Note the quoting of the value for `fontFamily` here; it expects a string!
        fontFamily: 'JosefinSans_400Regular',
        color: '#676767',
        lineHeight: '120%',
        flexWrap: 'wrap',
        margin: 0,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '1rem'
      }
  });
  
