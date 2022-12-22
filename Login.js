import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.preventAutoHideAsync();

// iOS: view -> UIView
// android: view -> androidView
// react native lets us develop independent of actual ios/android
// and translates stuff for us
const Login = () => {
    const [fontsLoaded] = useFonts({
        'Lato': require('./assets/fonts/Lato/Lato-Regular.ttf'),
        'Lato-Bold': require('./assets/fonts/Lato/Lato-Bold.ttf')
    });

    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    const handleSubmit = () => {
        if (email == "" || password == "") {
            Alert.alert('Please fill in all fields');
        }
        else {
            Alert.alert('TODO: process info...');
            console.log("email:", email);
            console.log("password:", password);
        }
    }

    const handleCreateAcc = () => {
        Alert.alert('TODO: new acc...');
    }

    // const onLayoutRootView = React.useCallback(async () => {
    //     if (fontsLoaded) {
    //       await SplashScreen.hideAsync();
    //     }
    // }, [fontsLoaded]);

    if (!fontsLoaded) {
        console.log("erorr: font failed to load");
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.card}>
                    <Text style={styles.titleText}>hello again!</Text>
                    <TextInput 
                        placeholder="email"
                        onChangeText={onChangeEmail}
                        value={email}
                        style={styles.inputText} 
                        placeholderTextColor={'#8E8E8E'}
                    />
                    <TextInput
                        placeholder="password"
                        onChangeText={onChangePassword}
                        value={password}
                        style={styles.inputText}
                        placeholderTextColor={'#8E8E8E'}
                    />
                    <TouchableOpacity onPress={handleSubmit} style={styles.loginButton}>
                        <Text style={styles.loginText}>
                            log in
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleCreateAcc}>
                    <Text style={styles.noAccText}>
                        create an account
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // flexible, will grow hor/vert to fill free space (whole screen)
    backgroundColor: '#B6C3F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    width: 350,
    height: 350,
    borderRadius: 30,
    alignItems: 'center', // takes care of textAlign
    fontFamily: 'Lato'
  },
  titleText: {
    color: '#000',
    height: 50,
    fontSize: 34,
    marginTop: 40,
    fontFamily: 'Lato-Bold'
  },
  inputText: {
    backgroundColor: '#E1E1E1',
    color: 'black',
    width: 293,
    height: 44,
    borderRadius: 10,
    marginTop: 30,
    fontSize: 20,
    paddingLeft: 15,
    fontFamily: 'Lato'
  },
  loginButton: {
    backgroundColor: '#7990E0',
    width: 116,
    height: 44,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center', // align horizontally
    justifyContent: 'center' // align vertically
  },
  loginText: {
    color: '#FFF',
    fontFamily: 'Lato-Bold',
    fontSize: 20,
  },
  noAccText: {
    color: "#fff",
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center'
  }
});

export default Login;