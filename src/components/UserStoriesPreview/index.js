import React from 'react';
import Story from '../UserStoryPreview';
import { View, FlatList } from 'react-native';
import styles from './styles';
import storiesData from '../../data/stories'
// const data = [
//     {
//       image: '../../assets/images/randomdude.jpeg',
//       name: 'Joel'
//     },
//     {
//       image: '../../assets/images/randomDude2.jpeg',
//       name: 'Ben'
//     },
//     {
//       image: '../../assets/images/randomLady.jpeg',
//       name: 'Anna'
//     },
//     {
//       image: '../../assets/images/randomLady2.jpeg',
//       name: 'Diana'
//     },
//     {
//       image: '../../assets/images/randomGuy3.jpeg',
//       name: 'Danny'
//     },
//     {
//       image: '../../assets/images/randomLady3.jpeg',
//       name: 'Claire'
//     },
//     {
//       image: '../../assets/images/randomLady4.jpeg',
//       name: 'Elizabeth'
//     },
//     {
//       image: '../../assets/images/randomGuy4.jpeg',
//       name: 'Michael'
//     }
// ]

// const data = [
//   {
//     image: require('../../assets/images/randomdude.jpeg'),
//     name: 'Joel'
//   },
//   {
//     image: require('../../assets/images/randomDude2.jpeg'),
//     name: 'Ben'
//   },
//   {
//     image: require('../../assets/images/randomLady.jpeg'),
//     name: 'Anna'
//   },
//   {
//     image: require('../../assets/images/randomLady2.jpeg'),
//     name: 'Diana'
//   },
//   {
//     image: require('../../assets/images/randomGuy3.jpeg'),
//     name: 'Danny'
//   },
//   {
//     image: require('../../assets/images/randomLady3.jpeg'),
//     name: 'Claire'
//   },
//   {
//     image: require('../../assets/images/randomLady4.jpeg'),
//     name: 'Elizabeth'
//   },
//   {
//     image: require('../../assets/images/randomGuy4.jpeg'),
//     name: 'Michael'
//   }
// ]

const Stories = () => {
  return (
    <FlatList 
      data={storiesData}
      renderItem={({item}) => <Story story={item} key={item.id} />}
      keyExtractor={item => item.name}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.StoriesContainer}
    />
  )
}

export default Stories; 