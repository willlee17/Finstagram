import React from 'react';
import ProfilePicture from '../ProfilePicture';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'

import { useNavigation } from '@react-navigation/native';

const Story = ( props ) => {
  
  const {
    story: {
      user: {
        id, 
        image,
        name
      }
    }
  } = props;

  const navigation = useNavigation(); 

  const onPress = () => {
    navigation.navigate("Story", { userId: id });
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.storyContainer}>
      <ProfilePicture uri={image}/>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  )
}

export default Story; 