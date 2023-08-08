import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Colors from '../../theme/colors'
import Button from '../../components/common/button'
import CustomText from '../../components/common/CustomText'
import Feather from 'react-native-vector-icons/Feather'

const GettingStarted = ({navigation}:any) => {
    return (
        <View style={styles.container}>
            <View style={{ height: '85%', width: '100%',justifyContent:"center",alignItems:"center"}}>
                <Image source={require('../../../assets/images/onboarding/phone.png')} style={styles.image} />
            </View>
            <View style={{flexDirection:"column",justifyContent:"flex-end", height: '15%', width: '100%' }}>
                <View style={styles.buttonsHolder}>
                    <View style={{ width: "50%" }}>
                        <Button onPress={()=> navigation.navigate("SelectOnboarding")} br={1} h={70} bg={Colors.accent} >
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <CustomText color={Colors.primary}>Open Account</CustomText>
                                <Feather name='arrow-up-right' color={Colors.primary} />
                            </View>
                        </Button>
                    </View>
                    <View style={{ width: "50%" }}>
                        <Button title='Sign In' onPress={() => navigation.navigate("Login")} br={1} h={70} color={Colors.white} bg={Colors.primary} />
                    </View>
                </View>
            </View>
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