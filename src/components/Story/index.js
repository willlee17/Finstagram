import React from 'react';
import ProfilePicture from '../ProfilePicture';
import { View, Text } from 'react-native';
import styles from './styles'

const Story = ({ image, name }) => {
  return (
    <View style={styles.storyContainer}>
      <ProfilePicture uri={image}/>
      <Text style={styles.name}>{name}</Text>
    </View>
  )
}

export default Story; 