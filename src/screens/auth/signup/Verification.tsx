import { ScrollView, StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../../../components/common/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../theme/colors';
import CustomText from '../../../components/common/CustomText';
import Button from '../../../components/common/button';
import { useRef, useState } from 'react';
import OTPInput from 'react-native-otp';


const Verification = ({ navigation, route }: any) => {
    const params = route.params
    const [value, setValue] = useState("");

    return (
        <>
            <CustomHeader title='Verify Email Address' leftIcon={<MaterialCommunityIcons name='arrow-left' size={20} />} onLeftPress={() => navigation.goBack()} />
            <View style={styles.container}>
                <View style={{ width: "100%", marginHorizontal: "auto", height: 115, flexDirection: "column", justifyContent: "space-between"}}>
                    <OTPInput
                        value={value}
                        onChange={(text: string) => {
                            setValue(text)
                            console.log(text)
                        }}
                        tintColor="#FB6C6A"
                        offTintColor="#BBBCBE"
                        otpLength={6}
                        cellStyle={{ borderRadius: 12, height: 50, width: 50, borderColor: Colors.grey, borderWidth: 0.6 }}
                    />
                    <CustomText style={{ fontSize: 14, color: Colors.grey, textAlign: 'left', marginVertical: 20,marginLeft:10 }}>Resend Code</CustomText>
                    <Button title='Confirm' onPress={() => navigation.navigate("UserDetails")} br={12} h={50} color={Colors.white} bg={Colors.primary} />
                </View>
            </View>
        </>
    )
}

export default Verification

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        backgroundColor: Colors.white,
        paddingHorizontal: 20
    },
})