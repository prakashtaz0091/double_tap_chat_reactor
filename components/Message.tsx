import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '@/constants/Colors'
import Avatar from './Avatar'
import { Octicons } from '@expo/vector-icons';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from 'react-native-reanimated';
import {
    Gesture,
    GestureDetector,
    GestureHandlerRootView,
} from 'react-native-gesture-handler';


type message = {
    message_type: string,
    message_text: string
}


const Message = ({ message_type, message_text }: message) => {

    const doubleTapped = useSharedValue(false);
    const offset = useSharedValue({ x: 0, y: 0, width: 0, height: 0 });





    const handleLayout = (event: any) => {
        const { x, y, width, height } = event.nativeEvent.layout;
        offset.value = { x, y, width, height }
    };


    const doubleTap = Gesture.Tap()
        .maxDuration(250)
        .numberOfTaps(2)
        .onStart(() => {
            console.log('Double tap!');

            doubleTapped.value = !doubleTapped.value;
        });

    const animatedStyles = useAnimatedStyle(() => ({
        transform: doubleTapped.value ? [{ scale: withTiming(1) }] : [{ scale: 5 }],

    }));
    const react_badge = useAnimatedStyle(() => ({
        // backgroundColor: pressed.value ? '#FFE04B' : '#B58DF1',
        // transform: [{ scale: withTiming(pressed.value ? 1.2 : 1) }],
        display: doubleTapped.value ? "flex" : "none",
        position: "absolute",
        bottom: -18,
        left: 20,
        backgroundColor: "gray",
        padding: 5,
        borderRadius: 30,
        width: 30,
        alignItems: "center",
        borderWidth: 2,
        borderColor: "black"
    }));



    return (
        <GestureHandlerRootView style={message_type === "incoming" ? styles.message_wrapper : styles.message_wrapper_reverse}>
            <Avatar imageUrl={require('@/assets/images/profile.webp')} message_type={message_type} />
            <GestureDetector gesture={doubleTap}>
                <View style={styles.message}  >
                    <Text style={styles.text} >{message_text}</Text>
                    <Animated.View style={react_badge} >

                        <Animated.View style={animatedStyles} onLayout={handleLayout} >
                            <Octicons name="heart-fill" size={15} color="white" />
                        </Animated.View>

                    </Animated.View>
                </View>
            </GestureDetector>
        </GestureHandlerRootView>
    )
}

export default Message


const styles = StyleSheet.create({
    text: {
        color: "white",
        letterSpacing: 0.6
    },
    message: {
        padding: 10,
        borderRadius: 20,
        maxWidth: "60%",
        backgroundColor: Colors.light.tint,
        position: "relative"


        // width: "80%",
    },
    message_wrapper: {
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-end",

    },
    message_wrapper_reverse: {
        flexDirection: "row-reverse",
        justifyContent: "flex-start",

    },

})