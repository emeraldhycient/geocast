import React from 'react';
import { StyleSheet, View } from 'react-native';
import ZegoUIKitPrebuiltLiveStreaming, { HOST_DEFAULT_CONFIG } from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn'

export default function Stream(props:any) {
    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltLiveStreaming
                appID={"1747480739"}
                appSign={"616afd7ccda72d955129ee324f769f44f4e11e05cf86edb5f0707ac259cf16f9"}
                userID={"12345"}
                userName={"Hycient"}
                liveID={"616afd7c"}

                config={{
                    ...HOST_DEFAULT_CONFIG,
                    onLeaveLiveStreaming: () => { props.navigation.navigate('HomePage') }
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})