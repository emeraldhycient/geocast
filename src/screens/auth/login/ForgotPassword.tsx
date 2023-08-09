import { StyleSheet, Image, View } from 'react-native'
import React, { useState } from 'react'
import { Switch, TextInput, TouchableRipple } from "react-native-paper"
import CustomHeader from '../../../components/common/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '../../../components/common/CustomText';
import CustomTextInput from '../../../components/common/CustomTextInput';
import Colors from '../../../theme/colors';
import Button from '../../../components/common/button';
import OTPInput from 'react-native-otp';

const ForgotPassword = ({ navigation }: any) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [checked, setChecked] = React.useState(false);
    const [steps, setsteps] = useState(1)
    const [value, setValue] = useState("");

    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
            <CustomHeader title={steps === 1 ? 'Forgot Password' : steps === 2 ? 'Verify Email Address' : 'Reser Password'} leftIcon={<MaterialCommunityIcons name='arrow-left' size={20} />} onLeftPress={() => navigation.goBack()} />
            {
                steps === 1 ?
                    <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                        <CustomText style={{ marginBottom: 10 }}>Email Address</CustomText>
                        <CustomTextInput placeholder="Enter your email address" />
                        <View style={{ width: "100%", marginHorizontal: "auto", height: 100, flexDirection: "column", justifyContent: "space-between", marginTop: 40 }}>
                            <Button title='Search for Account' onPress={() =>setsteps(2)} br={6} h={50} color={Colors.white} bg={Colors.primary} />
                            <TouchableRipple onPress={() => navigation.navigate("Login")}>
                                <CustomText style={{ marginVertical: 10, textAlign: "center", fontSize: 14, fontWeight: "400" }}>Remember Now? Sign In</CustomText>
                            </TouchableRipple>
                        </View>
                    </View>
                    : null
            }
            {
                steps === 2 ?
                    <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
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
                        <CustomText style={{ fontSize: 14, color: Colors.grey, textAlign: 'left', marginVertical: 20, marginLeft: 10 }}>Resend Code</CustomText>
                        <Button title='Confirm' onPress={() => setsteps(3)} br={12} h={50} color={Colors.white} bg={Colors.primary} />
                       
                    </View>
                    : null
            }
            {
                steps === 3 ?
                    <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                        <CustomText style={{ marginVertical: 10 }}>New Password </CustomText>
                        <CustomTextInput placeholder="Password" right={
                            <TextInput.Icon
                                icon={secureTextEntry ? "eye" : "eye-off"}
                                onPress={() => {
                                    setSecureTextEntry(!secureTextEntry);
                                    return false;
                                }}
                                color={Colors.gray}
                            />
                        }
                            style={{ marginBottom: 10 }}
                        />
                        <CustomText style={{ marginVertical: 10 }}>Confirm Password</CustomText>
                        <CustomTextInput placeholder="Update Password" right={
                            <TextInput.Icon
                                icon={secureTextEntry ? "eye" : "eye-off"}
                                onPress={() => {
                                    setSecureTextEntry(!secureTextEntry);
                                    return false;
                                }}
                                color={Colors.gray}
                            />
                        } />
                        <View style={{ width: "100%", marginHorizontal: "auto", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 20 }}>
                            <Switch
                                value={checked}
                                onValueChange={() => {
                                    setChecked(!checked);
                                }}
                                color={Colors.accent}
                            />
                            <View style={{ width: "90%" }}>
                                <CustomText style={{ fontSize: 14, fontWeight: '300', lineHeight: 24, textAlign: "center" }}>By continuing, you agree to our  <CustomText style={{ marginTop: 20, fontSize: 14, fontWeight: '300', lineHeight: 24, textAlign: "center", color: Colors.primary }}>Terms of Service , Broadcaster Agreement & Privacy Policy</CustomText></CustomText>
                            </View>
                        </View>
                        <View style={{ width: "100%", marginHorizontal: "auto", height: 100, flexDirection: "column", justifyContent: "space-between", marginTop: 20 }}>
                            <Button title='Update Now' onPress={() => navigation.navigate("Login")} br={6} h={50} color={Colors.white} bg={Colors.primary} />
                        </View>
                    </View>
                    : null
            }
        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({})