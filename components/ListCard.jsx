import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ColorDefault, TextDefault, center, h3 } from '../assets/styles/global';

const ListCard = () => {
  return (
    <View style={[center, styles.container]}>
     
      <Image
        source={{ uri: 'https://www.gethucinema.com/wp-content/uploads/2023/06/KashmiraPardesi-86.jpg' }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.textContainer}>
        <Text style={[h3, ColorDefault]}>Title here</Text>
        <Text style={TextDefault}>some discriptions here</Text>
      </View>

      <View>
        <Text>@</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 7,
      borderRadius:5,
      backgroundColor: "#2f3855",
      // shadowColor: '#64646F',
      // shadowOffset: { width: 0, height: 7 },
      // shadowOpacity: 0.2,
      // shadowRadius: 29,
      // elevation: 5,
      marginVertical: 5
    },
    image: {
      flex: 0, // 3/4 of the container height
      width: 50,
      height: 50,
      borderRadius:2,
      resizeMode: "cover",
      marginRight: 5
    },
    textContainer: {
      flex: 3, // 1/4 of the container height
    //   width: '100%',
    height: "100%",
    flexDirection: 'column',
    // alignItems: "flex-end",
    justifyContent: "space-between",
      marginVertical: 3
    },
    text: {
      fontSize: 14,
      color: '#F4F5FC',
    },
    name: {
      fontSize: 16,
      color: '#F4F5FC',
      fontWeight: 600
    }
  });

export default ListCard