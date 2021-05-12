import React from 'react';
import Post from '../Post'
import { FlatList } from 'react-native'
import Stories from '../UserStoriesPreview'

const data = [
  {
    id: '1',
    user: {
      image: require('../../assets/images/randomdude.jpeg'),
      name: 'Joel'
    },
    imageUri: require('../../assets/images/bridge-photo.jpeg'),
    caption: 'Bridges in NY with my new camera #b&w',
    likesCount: 54,
    postedAt: '1 hour ago', 
  },
  {
    id: '2',
    user: {
      image: require('../../assets/images/randomLady2.jpeg'),
      name: 'Diana'
    },
    imageUri: require('../../assets/images/friends-posing.jpeg'),
    caption: 'Day 1 bests :)',
    likesCount: 102,
    postedAt: '3 hours ago', 
  },
  {
    id: '3',
    user: {
      image: require('../../assets/images/randomGuy4.jpeg'),
      name: 'Michael'
    },
    imageUri: require('../../assets/images/cow.jpeg'),
    caption: 'Beth loves the sun #sundayfunday',
    likesCount: 87,
    postedAt: '3 hours ago', 
  },
  {
    id: '4',
    user: {
      image: require('../../assets/images/randomLady4.jpeg'),
      name: 'Elizabeth'
    },
    imageUri: require('../../assets/images/coffee-break.jpeg'),
    caption: '#caffiend #morningbrew',
    likesCount: 24,
    postedAt: '3 hours ago', 
  },
]

const Feed = () => {
  return (
    <FlatList 
      data={data}
      renderItem={({item}) => <Post post={item} />}
      keyExtractor={({id}) => id}
      ListHeaderComponent={<Stories />}
    />
  )
}

export default Feed; 