import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BlueScreen from './src/components/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CorlorScreen from './src/components/ColorScreen';
import HomeScreen from './src/components/HomeScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ColorScreen" component={CorlorScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({});
