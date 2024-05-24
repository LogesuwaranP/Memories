import axios from 'axios';
import * as DocumentPicker from 'expo-document-picker';
import React from 'react';
import { Alert, View } from 'react-native';

const uploadFile = async (fileUri, fileType, fileName, caption) => {
  const formData = new FormData();
  formData.append('file', {
    uri: fileUri,
    type: fileType,
    name: fileName
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
};

const About = () => {
  const pickFile = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({});
      
      if (res.type === 'success') {
        const { uri, mimeType, name } = res;
        uploadFile(uri, mimeType, name, 'Ca');
      }
    } catch (err) {
      Alert.alert('Error picking file:', err.message);
    }
  };

  return (
    <View>
      <Text>Pick a file and upload</Text>
      {/* <Button title="Pick a file and upload" onPress={pickFile} /> */}
    </View>
  );
};

export default About;
