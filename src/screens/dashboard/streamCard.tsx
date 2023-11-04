import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Define a type for the component props
type CardProps = {
    imageUri?: string;
    source?: any,
    title: string;
    subtitle: string;
    viewersCount: string;
    islive: Boolean
};

// Use the CardProps type for the component's props
const StreamCard: React.FC<CardProps> = ({ imageUri, title, subtitle, viewersCount, islive, source }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image source={source ?? { uri: imageUri }} style={styles.image} />
                {
                    islive &&
                    <View style={styles.pillContainer}>
                        <View style={styles.active}></View>
                        <Text style={styles.pillText}>Live Now</Text>
                    </View>
                }
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                    <View style={styles.viewersContainer}>
                        <Text style={styles.viewersCount}>{viewersCount}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 8,
        overflow: 'hidden',
        margin: 10,
        width: "44%"
    },
    image: {
        width: '100%',
        height: 130, // Fixed height for the image
        borderRadius: 16
    },
    textContainer: {
        padding: 10,
    },
    title: {
        color: "rgba(0, 0, 0, 0.80)",
        fontSize: 15,
        fontWeight: "500",
        lineHeight: 18
    },
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: 'grey',
    },
    viewersContainer: {
        // backgroundColor: 'lightgrey',
        borderRadius: 10,
        padding: 6,
    },
    viewersCount: {
        fontSize: 12,
    },
    imageContainer: {
        position: 'relative',
    },

    pillContainer: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 15,
        paddingVertical: 8,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3
    },
    active: {
        width: 8,
        height: 8,
        backgroundColor: 'red',
        borderRadius: 100
    },
    pillText: {
        color: "#F33",
        fontSize: 10,
        fontWeight: "500",
    },
});

export default StreamCard;
