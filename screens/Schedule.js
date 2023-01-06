import React, { useEffect, useReducer } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Alert, KeyboardAvoidingView } from 'react-native';
import Course from '../components/Course';
import { useNavigation } from '@react-navigation/core';
import { useFonts } from 'expo-font';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';

// iOS: view -> UIView
// android: view -> androidView
// react native lets us develop independent of actual ios/android
// and translates stuff for us
const Schedule = () => {
    const [fontsLoaded] = useFonts({
        'Lato': require('../assets/fonts/Lato/Lato-Regular.ttf'),
        'Lato-Bold': require('../assets/fonts/Lato/Lato-Bold.ttf')
    });

    const navigation = useNavigation();

    const handleSubmit = () => {
        signOut(auth)
            .then(() => {
                // signed out
                console.log("User has been signed out");
                navigation.navigate("Login");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert(errorMessage);
            });
    }

    if (!fontsLoaded) {
        console.log("error: font failed to load");
        return null;
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding"> 
            <View>
            <TouchableOpacity onPress={handleSubmit}>
                <Text>
                    log out button
                </Text>
            </TouchableOpacity>
            


            <Course 
                subject={'EECS'}
                cat_num={'280'}
                comp={'LEC'}
                time={'1:30-2:30 PM'}
                attending={true}
                enable_edit={false}/>
            <Course 
                subject={'EECS'}
                cat_num={'280'}
                comp={'LAB'}
                time={'1:30-2:30 PM'}
                attending={true}
                enable_edit={false}/>
            <Course 
                subject={'EECS'}
                cat_num={'281'}
                comp={'LEC'}
                time={'2:30-4:30 PM'}
                attending={true}
                enable_edit={false}/>
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
    weekdayText: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 365,
        height: 65,
        fontSize: 24,
        fontFamily: 'Lato-Bold',
    }
});

export default Schedule;