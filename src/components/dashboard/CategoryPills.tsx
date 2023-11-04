import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

const CategoryPills = ({ categories, selectedCategory, setSelectedCategory }: any) => {

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContainer}
        >
            {categories.map((category: any, index: any) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.pill,
                        selectedCategory === category && styles.selectedPill
                    ]}
                    onPress={() => setSelectedCategory(category)}
                >
                    <Text
                        style={[
                            styles.pillText,
                            selectedCategory === category && styles.selectedPillText
                        ]}
                    >
                        {category}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default CategoryPills


const styles = StyleSheet.create({
    scrollViewContainer: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    pill: {
        borderRadius: 20,
        backgroundColor: '#eee',
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginHorizontal: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedPill: {
        backgroundColor: Colors.black,
    },
    pillText: {
        color: 'black',
    },
    selectedPillText: {
        color: 'white',
    },
});
