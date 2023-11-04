import { View, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/common/Header'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../../theme/colors';
import CategoryPills from '../../components/dashboard/CategoryPills';
import StreamCard from './streamCard';

const Dashboard = ({ navigation }: any) => {

    const categories = ['Books', 'Electronics', 'Clothing', 'Games', 'Music', 'Sports'];

    // State to hold the selected category
    const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);

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
            <CategoryPills categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
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
        paddingHorizontal:"2%"
    }
})

export default Dashboard