import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import About from './pages/About';
import Home from './pages/Home';
import Music from './pages/Music';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{ contentStyle: styles.container }}>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Category" component={Music} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding1,
    margin: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#23293d', // Set your desired background color here
  },
});
