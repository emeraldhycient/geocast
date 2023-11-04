import React from 'react';
import { StyleSheet, TextInput, View, Platform } from 'react-native';
import MapView from 'react-native-maps';

const MapScreen = () => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={{
                latitude: 6.6018,
                longitude: 3.3515,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
 />
            <TextInput
                placeholder="Search here"
                style={styles.searchBox}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    searchBox: {
        position: 'absolute', // This positions the search box within the container
        top: Platform.select({ ios: 45, android: 40 }), // Adjust this value to correctly place it at the top for iOS and Android, considering the status bar
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
});


export default MapScreen