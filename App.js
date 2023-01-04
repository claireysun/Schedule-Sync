import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Schedule from "./screens/Schedule";
import { LogBox } from 'react-native';

const Stack = createNativeStackNavigator();
LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core']);

// iOS: view -> UIView
// android: view -> androidView
// react native lets us develop independent of actual ios/android
// and translates stuff for us
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />
        <Stack.Screen options={{ headerShown: false }} name="Schedule" component={Schedule} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // flexible, will grow hor/vert to fill free space (whole screen)
  },
});

export default App;