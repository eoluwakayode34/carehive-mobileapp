import React from 'react';

import { Text,  StyleSheet } from 'react-native';

import {
  useFonts,
  
  JosefinSans_400Regular,
 
} from '@expo-google-fonts/josefin-sans';

const LinkText = ({children, fontSize = 14}) => {


  let [fontsLoaded] = useFonts({
 
    JosefinSans_400Regular
  
  });

  const onPress = () => {
      alert('Hello')
  }
  if (!fontsLoaded) {
    return <Text>laoding...</Text>;
  } else {
    return (
       
        <Text
            onPress={onPress}
          style={[ {fontSize: fontSize},styles.text]}>{children}</Text>

    );
  }
};


export default LinkText



const styles = StyleSheet.create({
    text: {
        letterSpacing: 1.3,     // Note the quoting of the value for `fontFamily` here; it expects a string!
        fontFamily: 'JosefinSans_400Regular',
        color: '#0E69BD',
        lineHeight: '120%',
        flexWrap: 'wrap',
        margin: 0,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '1rem'
      }
  });
  
