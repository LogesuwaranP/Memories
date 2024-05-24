import { Audio } from 'expo-av';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';

const AudioPlayer = ({ uri }) => {
  const [sound, setSound] = useState();

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync({ uri }, {shouldPlay: true, isLooping: true});
    setSound(sound);
    await sound.playAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); // Unload the sound from memory when the component unmounts
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container} onTouchStart={playSound}>

      <Button title="click Sound"  />
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AudioPlayer;
