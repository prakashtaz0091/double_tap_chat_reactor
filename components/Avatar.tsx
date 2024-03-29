import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface AvatarProps {
    imageUrl: ImageSourcePropType;
    message_type: string
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, message_type }) => {
    return (
        <View style={message_type === "outgoing" ? { display: "none" } : styles.container}>
            <Image source={imageUrl} style={styles.avatar} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 35,
        height: 35,
        borderRadius: 25,
        overflow: 'hidden', // Clip the image to the rounded border
    },
    avatar: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // Maintain aspect ratio and cover entire container
    },
});

export default Avatar;
