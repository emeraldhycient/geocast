import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../../theme/colors';

type CardProps = {
    headerTitle: string;
    images: string[];
    additionalCount: number;
    onJoinLive: () => void;
};

const Updatecard: React.FC<CardProps> = ({ headerTitle, images, additionalCount, onJoinLive }) => {
    // Renders each small image as a circular thumbnail
    const renderThumbnail = ({ item }: { item: string }) => (
        <Image source={{ uri: item }} style={styles.thumbnail} />
    );

    return (
        <View style={styles.cardContainer}>
            {/* Header */}
            <Text style={styles.header}>{headerTitle}</Text>

            {/* Thumbnails row */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.thumbnailsContainer}>
                {images.map((image, index) => (
                    <Image key={index} source={{ uri: image }} style={[styles.thumbnail, index !== images.length - 1 && styles.thumbnailOverlap]} />
                ))}
                {additionalCount > 0 && (
                    <View style={styles.additionalCountContainer}>
                        <Text style={styles.additionalCountText}>+{additionalCount}</Text>
                    </View>
                )}
            </ScrollView>

            {/* Footer */}
            <View style={styles.footer}>
                <TouchableOpacity onPress={onJoinLive} style={styles.joinButton}>
                    <Text style={styles.joinButtonText}>Join Live</Text>
                </TouchableOpacity>
                <Text style={styles.publicText}>Public</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'rgba(13, 168, 76, 0.02)',
        borderRadius: 8,
        overflow: 'hidden',
        margin: 10,
        width: "44%",
        padding: 8
    },
    header: {
        color: Colors.black,
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 30,
        marginBottom:6
    },
    thumbnailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    thumbnail: {
        width: 30,
        height: 30,
        borderRadius: 25,
        marginRight: 5,
    },
    thumbnailOverlap: {
        marginRight: -8, 
        borderColor: Colors.white,
        borderWidth:1
    },
    additionalCountContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 25,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
    },
    additionalCountText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginTop:8,
    },
    joinButton: {
        backgroundColor: " rgba(13, 168, 76, 0.05)",
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20,
        borderColor: Colors.primary,
        borderWidth: 1
    },
    joinButtonText: {
        color: Colors.primary,
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 24,
    },
    publicText: {
        color: "#55595B",
        fontSize: 12,
        fontWeight: "300",
        lineHeight: 24
    },
});

export default Updatecard;
