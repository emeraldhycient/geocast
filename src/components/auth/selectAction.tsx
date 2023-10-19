import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import Button from '../../components/common/button'
import CustomText from '../../components/common/CustomText'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../theme/colors'
import { useNavigation } from '@react-navigation/native'
import { TouchableRipple } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';


const SelectOnboarding = () => {
    const navigation = useNavigation()
    const { width } = useWindowDimensions()

    return (
        <View style={styles.container}>
            <View style={{ height: '50%', width: '100%', justifyContent: "center", alignItems: "center" }}>
                <Image source={require("../../../assets/images/onboarding/img3.png")} resizeMode='contain' style={styles.image} />
            </View>
            <View style={{ flexDirection: "column", justifyContent: "center", height: '40%', width: '100%', paddingHorizontal: 10 }}>
                <View style={{ paddingHorizontal: 10, marginVertical: 10, width: "100%" }}>
                    <View style={{ width: "80%", marginHorizontal: "10%" }}>
                        <CustomText style={styles.title}>Unveil the World's Traffic Symphony with GeoCast.</CustomText>
                    </View>
                    <CustomText style={styles.description}>We've reimagined the way you stay informed, entertained, and engaged with the road, and it all starts with our innovative app design.</CustomText>
                </View>
                <View style={styles.buttonsHolder}>
                    <TouchableOpacity onPress={() => navigation.navigate("SignUp" as never)} style={{ backgroundColor: Colors.primary, width: width - 30, height: 56, justifyContent: "center", alignItems: "center", paddingHorizontal: 20, borderRadius: 6 }}>
                        <CustomText style={{ marginVertical: 10, textAlign: "center", fontSize: 16, fontWeight: "400", color: Colors.white }}>Create New Account</CustomText>
                    </TouchableOpacity>
                    {/* <Button title='Create New Account' onPress={() => navigation.navigate("SignUp" as never)} br={6} h={50} color={Colors.white} bg={Colors.primary} /> */}
                    <View style={{ width: "100%" }}>
                        <TouchableRipple onPress={() => navigation.navigate("Login" as never)}>
                            <CustomText style={{ marginVertical: 10, textAlign: "center", fontSize: 16, fontWeight: "400" }}>Already have an account? Sign In</CustomText>
                        </TouchableRipple>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SelectOnboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },
    image: {
        height: '75%',
        width: '100%',
        marginTop: 20
    },
    buttonsHolder: {
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        width: "100%",
        paddingVertical:10
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 100,
        backgroundColor: Colors.accent,
        marginHorizontal: 5
    },
    title: {
        color: Colors.black,
        fontSize: 22,
        fontWeight: "700",
        lineHeight: 34,
        textAlign: "center"
    },
    description: {
        color: Colors.black,
        fontSize: 15,
        fontWeight: "300",
        lineHeight: 28, /* 186.667% */
        textAlign: "center"
    }
})