import React from 'react';
import { Text } from 'react-native';

const CustomText = ({ children, style, fontSize, color, fontFamily, ...rest }:any) => {
    const defaultStyles = {
        fontSize: fontSize || 16,
        color: color || 'black',
        fontFamily: fontFamily,
    };

    return (
        <Text style={[defaultStyles, style]} {...rest}>
            {children}
        </Text>
    );
};

CustomText.defaultProps = {
    fontSize: 16,
    color: 'black',
};

export default CustomText;
