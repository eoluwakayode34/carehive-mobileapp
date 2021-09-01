import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';

import {
  useFonts,
  
  JosefinSans_400Regular,
 
} from '@expo-google-fonts/josefin-sans';

const BaseText = ({children, ...otherProps}) => {
  let [fontsLoaded] = useFonts({
 
    JosefinSans_400Regular
  
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <Text>laoding...</Text>;
  } else {
    return (
       
        <Text
        {...otherProps}
          style={styles.text}>
{children}        </Text>

    );
  }
};


export default BaseText



const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        letterSpacing: 1.3,     // Note the quoting of the value for `fontFamily` here; it expects a string!
        fontFamily: 'JosefinSans_400Regular',
        color: '#676767',
        textAlign: 'center'
      }
  });
  
