import React from 'react';
import { Text, View } from 'react-native'
import ProfilePicture from '../../../ProfilePicture';
import styles from './styles';
import Icon from 'react-native-vector-icons/dist/Entypo';


const Header = ({ uri, name }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.left}>
        <ProfilePicture uri={uri} size={40} />
        <Text style={styles.name}>{ name }</Text>
      </View>
      <View style={styles.right}>
        <Icon name="dots-three-vertical" size={15}/>
      </View>
    </View>
  )
}

export default Header;