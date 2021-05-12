import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles.js';

const ProfilePicture = ({ uri, size=70 }) => {
console.log('hi')
  return (
    <View style={[styles.viewContainer, { width: size + 6, height: size + 6}]}>
      <Image 
        style={[styles.image,{ width: size, height: size }]}
        source={uri} 
      />
    </View>
   
  )
}

export default ProfilePicture; 