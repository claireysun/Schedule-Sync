import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import Login from "./Login";

// iOS: view -> UIView
// android: view -> androidView
// react native lets us develop independent of actual ios/android
// and translates stuff for us
const App = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // flexible, will grow hor/vert to fill free space (whole screen)
  },
});

export default App;