import React from 'react';
import { Text, View } from 'react-native'
import styles from './styles';

const Footer = ({ likesCount, postedAt, caption }) => {

  return (
    <View style={styles.footerContainer}>
      <Text style={styles.likes}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  
  )
}


export default Footer;