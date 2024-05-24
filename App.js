import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Music from './pages/Music';


export default function App() {

  const Stack = createNativeStackNavigator();

  const blobUri = 'https://blobaccountcrud.blob.core.windows.net/user-c5a3f1b1-0408-4117-8080-75187f886d0a/music/sample-3s.mp3';

  return (
    <SafeAreaView style={styles.container}>
      {/* <NavigationContainer >
        <Stack.Navigator screenOptions={{ contentStyle: styles.container }}>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Category" component={Music} />
        </Stack.Navigator>
      </NavigationContainer> */}
      <View style={styles.container}>
        <Music uri={blobUri} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:1,
    margin: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#23293d', // Set your desired background color here
  },
});
