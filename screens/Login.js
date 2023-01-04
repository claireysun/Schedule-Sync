import React, { useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Alert, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useFonts } from 'expo-font';

// iOS: view -> UIView
// android: view -> androidView
// react native lets us develop independent of actual ios/android
// and translates stuff for us
const Login = () => {
    const [fontsLoaded] = useFonts({
        'Lato': require('../assets/fonts/Lato/Lato-Regular.ttf'),
        'Lato-Bold': require('../assets/fonts/Lato/Lato-Bold.ttf')
    });

    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                console.log("logout detected");
                navigation.navigate("Schedule");
            }
        })
        return unsubscribe;
    }, [])

    const handleSubmit = () => {
        if (email == "" || password == "") {
            Alert.alert('Please fill in all fields');
        }
        else {
            console.log("email:", email);
            console.log("password:", password);

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // signed in
                    const user = userCredential.user;
                    console.log(user.email);
                    navigation.navigate("Schedule");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    Alert.alert(errorMessage);
                });
        }
    }

    const handleCreateAcc = () => {
        navigation.navigate("Signup");
    }

    if (!fontsLoaded) {
        console.log("error: font failed to load");
        return null;
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding"> 
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
        </KeyboardAvoidingView>
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