import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const FolderCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://chillentertain.com/bby_uploads/celeb/8a88a93c7f2e24d4851d57560084ddd7.jpg' }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>Memories . 13</Text>
        <Text style={styles.text}>Text</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 7,
    height: 200,
    width: 150,
    borderRadius:5,
    backgroundColor: "#2f3855",
    marginRight: 10,
    // shadowColor: '#64646F',
    // shadowOffset: { width: 0, height: 7 },
    // shadowOpacity: 0.2,
    // shadowRadius: 29,
    // elevation: 5,

  },
  image: {
    flex: 3, // 3/4 of the container height
    width: '100%',
    borderRadius:2,
  },
  textContainer: {
    flex: 1, // 1/4 of the container height
    width: '100%',
    marginVertical: 3
  },
  text: {
    fontSize: 14,
    color: '#F4F5FC',
  },
  name: {
    fontSize: 16,
    color: '#F4F5FC',
    //fontWeight: 600
  }
});

export default FolderCard;
