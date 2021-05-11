import React, { useState, useEffect } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import styles from './styles';
import ADIcon from 'react-native-vector-icons/dist/AntDesign';
import FontistoIcon from 'react-native-vector-icons/dist/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/dist/Ionicons';
import FAIcon from 'react-native-vector-icons/dist/FontAwesome';


const Footer = ({ likesCount: likesCountProps, postedAt, caption }) => {
  const [ isLiked, setIsLiked ] = useState(false); 
  const [ likesCount, setLikesCount ] = useState(0); 

  useEffect(() => {
    setLikesCount(likesCountProps)
  }, [])

  const onLikedPressed = () => {
    setIsLiked(!isLiked);
    const liked = !!isLiked  ? -1 : 1
    console.log('isLiked: ', isLiked)
    setLikesCount(likesCount + liked)
  }

  return (
    <View style={styles.footerContainer}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcons}>
          <TouchableWithoutFeedback onPress={onLikedPressed}>
            { !isLiked ? 
              <ADIcon style={styles.icon} name="hearto" size={25} color={"#545454"}/> 
              : 
              <ADIcon style={styles.icon} name="heart" size={25} color={"#e73838"}/> 
            }
            
          </TouchableWithoutFeedback>
          
          <FontistoIcon style={styles.icon} name="comment" size={23} color={"#545454"} />
          <IoniconsIcon style={styles.icon} name="paper-plane-outline" size={24} color={"#545454"} />
        </View>
   
        <View style={styles.rightIcons}>
           <FAIcon  style={styles.icon} name="bookmark-o" size={25} color={"#545454"}/>
        </View>
      </View>


      <Text style={styles.likes}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  
  )
}


export default Footer;