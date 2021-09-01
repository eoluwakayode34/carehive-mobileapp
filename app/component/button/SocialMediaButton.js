import React from 'react';

import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import google from '../../../assets/google.png'
import {
    useFonts,
    
    JosefinSans_400Regular,
   
  } from '@expo-google-fonts/josefin-sans';

const SocialMediaButton = ({children, color, onPress, textColor  = '#000', imageSource, ...otherProps}) => {
    let [fontsLoaded] = useFonts({
 
        JosefinSans_400Regular
      
      });
    
   
    
      if (!fontsLoaded) {
        return <Text>laoding...</Text>;
      } else {
    return (
       <TouchableOpacity  onPress={onPress}  style={[{backgroundColor: color}, styles.button]}>

                <Image source={imageSource} style={styles.image} />
              <Text  style={[{color: textColor},styles.text]}>
              {children}
              </Text>
           
            </TouchableOpacity>

    );}
}
 
  



export default SocialMediaButton



const styles = StyleSheet.create({
    button: {
        width: '100%',
        padding: '1rem',
      
        justifyContent: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '.3rem'


       
      },
      text: {
        fontSize: 16,
        letterSpacing: 1.3,     // Note the quoting of the value for `fontFamily` here; it expects a string!
        fontFamily: 'JosefinSans_400Regular',
      
        fontWeight: 'normal',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'

      },
      image: {
          resizeMode: 'contain',
          width: 20,
           height: 20,  
            marginRight: '1rem'          
      }
  });
  
