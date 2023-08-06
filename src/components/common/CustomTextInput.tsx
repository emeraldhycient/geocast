import React from 'react';
import { TextInput } from 'react-native';

const CustomTextInput = ({ style, ...rest }: any) => {
    const defaultStyles = {
        fontSize: 16,
        color: 'black',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingVertical: 8,
        paddingHorizontal: 12,
    };

    return (
        <TextInput style={[defaultStyles, style]} {...rest} />
    );
};

export default CustomTextInput;
