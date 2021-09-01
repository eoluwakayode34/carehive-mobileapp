import React from 'react';

import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
    useFonts,
    
    JosefinSans_400Regular,
   
  } from '@expo-google-fonts/josefin-sans';

const PrimaryButton = ({children, ...otherProps}) => {
    let [fontsLoaded] = useFonts({
 
        JosefinSans_400Regular
      
      });
    
   
    
      if (!fontsLoaded) {
        return <Text>laoding...</Text>;
      } else {
    return (
       <TouchableOpacity   style={styles.button}>
      
              <Text  style={styles.text}>
              {children}
              </Text>
           
            </TouchableOpacity>

    );}
}
 
  



export default PrimaryButton



const styles = StyleSheet.create({
    button: {
        width: '100%',
        padding: '1rem',
        backgroundColor: 'white',
        paddingHorizontal: '2rem',
        shadowColor : 'black',
        shadowOffset :   {width: 0, height: 0},
        shadowRadius: 5,
        shadowOpacity: .4,
        borderRadius: '20px',
        borderColor: '#5ED2EC',
        borderWidth: '2px'
      },
      text: {
        fontSize: 20,
        letterSpacing: 1.3,     // Note the quoting of the value for `fontFamily` here; it expects a string!
        fontFamily: 'JosefinSans_400Regular',
        color: '#000',
        fontWeight: 600,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'

      }
  });
  
