import { View, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/common/Header'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../../theme/colors';
import CategoryPills from '../../components/dashboard/CategoryPills';
import StreamCard from '../dashboard/streamCard';
import CustomText from '../../components/common/CustomText';
import Updatecard from '../../components/trending/updateCard';

const Trending = ({ navigation }: any) => {

    return (
        <ScrollView>
            <CustomHeader
                title=' '
                leftIcon={<Image source={require("../../../assets/images/dashboard/user.png")} style={{ width: 40, height: 40 }} />}
                onLeftPress={() => { }}
                rightIcon={
                    <View style={styles.righticon}>
                        <TouchableOpacity onPress={() => navigation.navigate('notifications')}>
                            <Image source={require("../../../assets/images/dashboard/notificationbing.png")} style={{ width: 20, height: 20 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('notifications')}>
                            <Image source={require("../../../assets/images/dashboard/messagetext1.png")} style={{ width: 20, height: 20 }} />
                        </TouchableOpacity>
                    </View>
                }
                onRightPress={() => { }}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingVertical: 15 }}>
                <CustomText style={styles.trendingHeader}>Trending Live</CustomText>
                <CustomText style={styles.trendingHeadersub}>See all</CustomText>
            </View>
            <View style={styles.categorycontainer}>
                <Updatecard
                    headerTitle="Traffic Update With Ikoyi Flood"
                    images={[
                        'https://via.placeholder.com/50',
                        'https://via.placeholder.com/50',
                        'https://via.placeholder.com/50',
                        'https://via.placeholder.com/50',
                    ]}
                    additionalCount={5}
                    onJoinLive={() => console.log('Joining live session')}
                />
                <Updatecard
                    headerTitle="Traffic Update With Ikoyi Flood"
                    images={[
                        'https://via.placeholder.com/50',
                        'https://via.placeholder.com/50',
                        'https://via.placeholder.com/50',
                        'https://via.placeholder.com/50',
                    ]}
                    additionalCount={5}
                    onJoinLive={() => console.log('Joining live session')}
                />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingVertical: 8 }}>
                <CustomText style={styles.trendingHeader}>Trending Videos</CustomText>
                <CustomText style={styles.trendingHeadersub}>See all</CustomText>
            </View>
            <View style={styles.categorycontainer}>
                <StreamCard
                    // imageUri="https://via.placeholder.com/150"
                    source={require("../../../assets/images/dashboard/VIDEO.png")}
                    title="Global Music Limehouse"
                    subtitle="@ezemmuo"
                    viewersCount="1.2K views"
                    islive
                />
                <StreamCard
                    imageUri="https://via.placeholder.com/150"
                    title="Global Music Limehouse"
                    subtitle="@ezemmuo"
                    viewersCount="1.2K views"
                    islive={false}
                />

            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    
    righticon: {
        width: "100%",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 8
    },
    categorycontainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: "2%"
    },
    trendingHeader: {
        color: Colors.black,
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 24
    },
    trendingHeadersub: {
        color: Colors.primary,
        fontSize: 14,
        fontWeight: "300",
        lineHeight: 24
    }
})

export default Trending