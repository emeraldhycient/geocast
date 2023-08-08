import React from 'react';
import { TextInput } from 'react-native-paper';
import Colors from '../../theme/colors';

const CustomTextInput = ({ style, ...rest }: any) => {
    const defaultStyles = {
        backgroundColor: Colors.white,
        borderColor: '#F1F1F1',
        borderWidth: 1,
        color: Colors.black,
        marginTop: 1,
        fontSize: 12,
        borderTopEndRadius: 8,
        borderBottomEndRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        outlineStyle: 'none',
        outline: 'none'
    };

    return (
        <TextInput
            style={[defaultStyles, style]}
            {...rest}
            textColor={Colors.black}
            placeholderTextColor={Colors.gray}
            underlineColor='transparent'
            theme={{
                colors: {
                    text: 'black', underlineColor: 'transparent'
                }
            }} />
    );
};

export default CustomTextInput;
