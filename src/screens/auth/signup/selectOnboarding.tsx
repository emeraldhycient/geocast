import { ScrollView, StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from 'react-native';
import Colors from '../../../theme/colors';
import CustomText from '../../../components/common/CustomText';
import Button from '../../../components/common/button';
import CustomHeader from '../../../components/common/Header';

const SelectOnboarding = ({ navigation }: any) => {
    return (
        <>
            <CustomHeader title='' leftIcon={<MaterialCommunityIcons name='arrow-left' size={20} />} onLeftPress={() => navigation.goBack()} />
            <View style={styles.container}>
                <View style={{
                    flexDirection: "column",
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <Image source={require("../../../../assets/logo/logo.png")} resizeMode='contain' style={{ width: 100, height: 100 }} />
                    <View style={{ width: '60%', marginHorizontal: "auto" }}>
                        <CustomText style={{ marginTop: 20, fontSize: 16, fontWeight: '400', lineHeight: 32, textAlign: "center" }}>Sign up for GeoCast</CustomText>
                        <CustomText style={{ marginTop: 20, fontSize: 14, fontWeight: '300', lineHeight: 24, textAlign: "center" }}>Create an account, get traffic updates, stream live road events and connect.</CustomText>
                    </View>
                </View>
                <View style={{ width: "80%", marginHorizontal: "auto", height: 180, flexDirection: "column", justifyContent: "space-between", marginTop: 40 }}>
                    <Button title='Use Phone or Email' onPress={() => navigation.navigate("SignUp")} br={100} h={50} color={Colors.white} bg={Colors.primary} />
                    <Button onPress={() => navigation.navigate("Login")} br={100} h={50} color={Colors.black} bg={Colors.accent} >
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image source={require("../../../../assets/images/onboarding/googleicon.png")} resizeMode='contain' style={{ width: 20, height: 20, marginRight: 10 }} />
                            <CustomText style={{ fontSize: 14, fontWeight: '300', lineHeight: 24, textAlign: "center" }}>Continue with Google</CustomText>
                        </View>
                    </Button>
                    <Button onPress={() => navigation.navigate("Login")} br={100} h={50} color={Colors.black} bg={Colors.accent} >
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image source={require("../../../../assets/images/onboarding/appleIcon.png")} resizeMode='contain' style={{ width: 20, height: 20, marginRight: 10 }} />
                            <CustomText style={{ fontSize: 14, fontWeight: '300', lineHeight: 24, textAlign: "center" }}>Continue with Apple</CustomText>
                        </View>
                    </Button>
                </View>
                <View style={{ width: "80%", marginHorizontal: "auto", height: 180, flexDirection: "column", justifyContent: "space-between", marginTop: 40 }}>
                    <CustomText style={{ marginTop: 20, fontSize: 14, fontWeight: '300', lineHeight: 24, textAlign: "center" }}>By continuing, you agree to our  <CustomText style={{ marginTop: 20, fontSize: 14, fontWeight: '300', lineHeight: 24, textAlign: "center", color: Colors.primary }}>Terms of Service , Broadcaster Agreement & Privacy Policy</CustomText></CustomText>
                </View>
            </View>
        </>
    )
}

export default SelectOnboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        backgroundColor: Colors.white,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})