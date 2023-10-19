import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Button from '../../components/common/button'
import CustomText from '../../components/common/CustomText'
import Feather from 'react-native-vector-icons/Feather'
import Colors from '../../theme/colors'
import { useNavigation } from '@react-navigation/native'


interface Props {
    image: any,
    title: string,
    description: string,
    onPress: () => void,
    index: number
}



const ScrollCard: React.FC<Props> = ({ image, title, description, index, onPress }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{ height: '60%', width: '100%', justifyContent: "center", alignItems: "center"}}>
                <Image source={image} resizeMode='contain' style={styles.image} />
            </View>
            <View style={{ flexDirection: "column", justifyContent: "center", height: '40%', width: '100%',paddingHorizontal:10 }}>
                <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: "center" }}>
                    <View style={[styles.dot, { width: index == 0 ? 22 : 10, backgroundColor: index == 0 ? Colors.primary : Colors.accent }]}></View>
                    <View style={[styles.dot, { width: index == 1 ? 22 : 10, backgroundColor: index == 1 ? Colors.primary : Colors.accent }]}></View>
                    <View style={[styles.dot, { width: index == 2 ? 22 : 10, backgroundColor: index == 2 ? Colors.primary : Colors.accent }]}></View>
                </View>
                <View style={{ paddingHorizontal: 10, marginVertical: 10 }}>
                    <CustomText style={styles.title}>{title}</CustomText>
                    <CustomText style={styles.description}>{description}</CustomText>
                </View>
                <View style={styles.buttonsHolder}>
                    <View style={{ width: 50 }}>
                        <Button onPress={() => navigation.navigate("SelectOnboarding" as never)} br={1} h={50} bg={Colors.white} >
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <CustomText color={Colors.gray}>Skip</CustomText>
                                <Feather name='arrow-up-right' color={Colors.gray} />
                            </View>
                        </Button>
                    </View>
                    <View style={{ width: 50 }}>
                        <Button onPress={onPress} h={50} br={100} color={Colors.white} bg={Colors.primary} style={{ width: 70 }} >
                            <Feather name='arrow-right' size={20} color={Colors.white} />
                        </Button>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ScrollCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        flexDirection: "column",
        alignItems: 'center',
        width:"100%",
        justifyContent: 'center',
    },
    image: {
        height: '75%',
        width: '100%',
        resizeMode: 'contain',
        marginTop: 20
    },
    buttonsHolder: {
        flexDirection: 'row',
        // width: '100%',
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15
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
        fontSize: 20,
        fontWeight: "700",
        lineHeight: 40
    },
    description: {
        color: Colors.black,
        fontSize: 15,
        fontWeight: "300",
        lineHeight: 28 /* 186.667% */
    }
})