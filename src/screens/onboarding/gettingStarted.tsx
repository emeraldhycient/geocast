import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../theme/colors'
import ScrollCard from '../../components/auth/scrollCard'

const GettingStarted = ({ navigation }: any) => {
    const [page, setpage] = useState(0)
  
    return (
        <View style={styles.container}>
            {
                page === 0 && 
            <ScrollCard image={require('../../../assets/images/onboarding/img1.png')} title={'Live Streaming'} description={'Go beyond traditional streaming with Geocast. Share your real-time experiences, discoveries, and adventures with the world. Showcase your creativity, talents, and interests to a global audience.'} index={page} onPress={()=> setpage(page+1)} />
            }
            {
                page === 1 && 
                <ScrollCard image={require('../../../assets/images/onboarding/img2.png')} title={'Real-Time Mapping'} description={"Geocast leverages the power of Google Maps to provide you with accurate and up-to-date maps. Whether you're an adventurer, travel enthusiast, or simply looking for your way around town."} index={page} onPress={()=> setpage(page+1)} />
            }
            {
                page === 2 && 
            <ScrollCard image={require('../../../assets/images/onboarding/img3.png')} title={'Live Streaming'} description={'Go beyond traditional streaming with Geocast. Share your real-time experiences, discoveries, and adventures with the world. Showcase your creativity, talents, and interests to a global audience.'} index={page} onPress={()=> setpage(0)} />
            }
         
        </View>
    )
}

export default GettingStarted

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: '75%',
        width: '100%',
        resizeMode: 'contain',
        marginTop:20
    },
    buttonsHolder: {
        flexDirection: 'row',
        width: '100%',
        alignItems: "center",
        justifyContent: "space-between",
    }
})