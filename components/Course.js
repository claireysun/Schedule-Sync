import React, { useEffect, useReducer } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

/*
props:
- title (full course title - 7)
- subject (just in parentheses EECS - 4) *
- cat_num (catalog # like 280 - 5) *
- class_num (specific to each section - 3)
- sect_num (section # - 6)
- comp (LEC/LAB component - 8) *
- dates (days of week LIST - 10-16)
- time (string - 19) *
- loc (string - 20)
- instruct (string - 21)

- attending (bool) *
- enable_edit (bool) *
*/

const Course = (props) => {
    const [fontsLoaded] = useFonts({
        'Lato': require('../assets/fonts/Lato/Lato-Regular.ttf'),
        'Lato-Bold': require('../assets/fonts/Lato/Lato-Bold.ttf')
    });


    if (!fontsLoaded) {
        console.log("error: font failed to load");
        return null;
    }

    return (
        <View style={styles.nonedit_component}>
            <Text style={styles.titleText}>
                {props.subject} {props.cat_num} - {props.comp}
            </Text>
            <Text style={styles.locText}>
                {props.time}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    nonedit_component: {
        backgroundColor: '#007C75',
        alignItems: 'center',
        justifyContent: 'center',
        width: 365,
        height: 65,
        borderRadius: 10
    },
    titleText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Lato-Bold',
        lineHeight: 24,
    },
    locText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Lato',
        lineHeight: 24,
    }
});

export default Course;