import React from 'react';

import { Text,  StyleSheet } from 'react-native';

import {
  useFonts,
  
  JosefinSans_400Regular,
 
} from '@expo-google-fonts/josefin-sans';

const HeadingText = ({children}) => {
  let [fontsLoaded] = useFonts({
 
    JosefinSans_400Regular
  
  });

 

  if (!fontsLoaded) {
    return <Text>laoding...</Text>;
  } else {
    return (
       
        <Text
        
          style={styles.text}>{children}</Text>

    );
  }
};


export default HeadingText



const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        letterSpacing: .5,     // Note the quoting of the value for `fontFamily` here; it expects a string!
        fontFamily: 'JosefinSans_400Regular',
        color: '#000',
        flexWrap: 'wrap',
        margin: 0,
        fontWeight: '600',
        textAlign: 'left',
        
        paddingHorizontal: '1rem'
      }
  });
  
