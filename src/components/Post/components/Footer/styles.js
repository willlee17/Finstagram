import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    footerContainer: {
      margin: 5
    },
    likes: {
      fontWeight: "bold",
      margin: 3
    },
    postedAt: {
      color: "#8c8c8c",
      margin: 3,
    },
    caption: {
      margin: 3
    },
    icon: {
      margin: 5,
      marginRight: 12
    },
    iconsContainer: {
      flexDirection: "row",
      justifyContent: "space-between"
    }, 
    leftIcons: {
      flexDirection: "row"
    }
})

export default styles;