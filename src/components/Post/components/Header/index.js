import React from 'react';
import { Text, View } from 'react-native'
import ProfilePicture from '../../../ProfilePicture';
import styles from './styles';

const Header = ({ uri, name }) => {
  return (
    <View style={styles.headerContainer}>
      <ProfilePicture uri={uri} size={40} />
      <Text style={styles.name}>{ name }</Text>
    </View>
  )
}

export default Header;