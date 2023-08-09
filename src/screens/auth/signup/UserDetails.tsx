import { StyleSheet, Image, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Switch } from "react-native-paper"
import CustomHeader from '../../../components/common/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '../../../components/common/CustomText';
import CustomTextInput from '../../../components/common/CustomTextInput';
import Colors from '../../../theme/colors';
import Button from '../../../components/common/button';
import CountryPicker from 'react-native-country-picker-modal'


const UserDetails = ({ navigation }: any) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [checked, setChecked] = React.useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
            <CustomHeader title='User Details' leftIcon={<MaterialCommunityIcons name='arrow-left' size={20} />} onLeftPress={() => navigation.goBack()} />
            <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                <CustomText style={{ marginBottom: 10 }}>Country</CustomText>
                <View style={{borderColor:Colors.gray,borderWidth:0.3,height:50,borderRadius:8,justifyContent:"center",paddingLeft:5}}>
                    <CountryPicker
                        countryCode='US'
                        withCountryNameButton={true}
                        onSelect={(country) => console.log(country.name)}
                        visible
                    />
                </View>
                <CustomText style={{ marginVertical: 10 }}>Address</CustomText>
                <CustomTextInput placeholder="eg. Akute Avenue" />
                <CustomText style={{ marginVertical: 10 }}>State</CustomText>
                <CustomTextInput placeholder="eg. Lagos" />
                <CustomText style={{ marginVertical: 10 }}>Create an Handle</CustomText>
                <CustomTextInput placeholder="Create an Handle" left={
                    <TextInput.Icon
                        icon={() => <CustomTextInput style={{ fontSize: 10 }}>@</CustomTextInput>}
                        onPress={() => {
                            setSecureTextEntry(!secureTextEntry);
                            return false;
                        }}
                        color={Colors.gray}
                    />
                } />

                <Button title='Create Account' onPress={() => navigation.navigate("Verification")} br={6} h={50} color={Colors.white} bg={Colors.primary} mt={20} />
            </View>
        </View>
    )
}

export default UserDetails

const styles = StyleSheet.create({})