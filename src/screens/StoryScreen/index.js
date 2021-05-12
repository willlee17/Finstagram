import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ImageBackground, ActivityIndicator, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native'
import storiesData from '../../data/stories';
import styles from  './styles'

const StoryScreen = () => {

  const [ userStories, setUserStories ] = useState(null)
  const [ activeStoryIndex, setActiveStoryIndex ] = useState(null)
  const [ activeStory, setActiveStory ] = useState(null)

  const route = useRoute();

  useEffect(() => {
    const userId = route.params.userId; 
    const userStories = storiesData.find(storyData => storyData.user.id == userId);
    setUserStories(userStories)
    setActiveStoryIndex(0)
  }, [])


  useEffect(() => {
    if (!userStories) {
      return;
    }

    if (activeStoryIndex < 0) {
      setActiveStoryIndex(0)
      return;
    }

    if (activeStoryIndex >= userStories.stories.length) {
      setActiveStoryIndex(userStories.stories.length - 1)
      return;
    }

    setActiveStory(userStories.stories[activeStoryIndex])
    
  }, [activeStoryIndex])

  const handleNextStory = () => {
    setActiveStoryIndex(activeStoryIndex + 1)
  }

  const handlePrevStory = () => {
    setActiveStoryIndex(activeStoryIndex - 1)
  }
  
  const handlePress = (evt) => {

    const xCoord = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width; 
    

    if (xCoord <= screenWidth / 2) {
      handlePrevStory()
    } else {
      handleNextStory()
    }
  }

  
  

  if (!activeStory) {
    return (
      <SafeAreaView >
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <ImageBackground style={styles.image} source={activeStory.image}>
          <Text>Sup</Text>
        </ImageBackground>
      </TouchableWithoutFeedback>
     
    </SafeAreaView>
  )
}

export default StoryScreen;