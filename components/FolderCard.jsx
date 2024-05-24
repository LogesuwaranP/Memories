import axios from 'axios';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FolderCard = ({type="folder"}) => {

  const handleAdd = () => {
    alert("clicked")
  }

  const uploadFile = async (fileUri, caption) => {
    // Create a FormData object to hold the file and caption
    const formData = new FormData();
    formData.append('file', {
      uri: fileUri,
      name: 'photo.jpg', // The name of the file, you can change it as needed
      type: 'image/jpeg' // The type of the file, change it according to your file type
    });
    formData.append('caption', caption);
  
    try {
      const response = await axios.post(
        'https://localhost:7290/api/Blog/c5a3f1b1-0408-4117-8080-75187f886d0a/folders/We/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      console.log('Upload successful:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }

  const pickImage = async () => {
    // Open image picker to select an image
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      // If an image was picked, upload it
      uploadFile(result.uri, 'Ca');
    }
  };

  return (
    <View>
    {type === "folder" && (
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
    )}
    {type === "empty" && (
      <TouchableOpacity style={styles.container} onPress={pickImage}>
        {/* <Image
          source={{ uri: 'https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-add-icon-png-image_925895.jpg' }}
          style={styles.image}
          resizeMode="cover"
        /> */}
        <View style={styles.AddIconContainer}>
          <Text style={styles.AddIcon}>+</Text>
        </View>
        <View style={styles.AddContainer}>
          <Text style={styles.name}>Create Moments</Text>
          <Text style={styles.text}>Take a moment save our Moments </Text>
        </View>
      </TouchableOpacity>
    )}
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
  },
  AddIconContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  AddIcon: {
    fontSize: 64,
    fontWeight: 700,
    color: '#F4F5FC',
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
  AddContainer: {
    flex: 2, // 1/4 of the container height
    width: '100%',
    justifyContent: 'space-evenly',
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
