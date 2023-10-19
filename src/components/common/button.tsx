import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TButtonProps } from '../../constants/types/types'
import { Caption, TouchableRipple } from 'react-native-paper'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import CustomText from './CustomText'

const Button = ({ title, onPress, children, m, mr, ml, mb, mt, p, pt, pb, pr, pl, bg, color, w, h, br, style, ...rest }: TButtonProps) => {
    return (
        <TouchableRipple onPress={onPress}>
            <View style={[style,
                {
                    backgroundColor: bg ? bg : Colors.primary,
                    borderRadius: br ? br : 10,
                    margin: m,
                    marginRight: mr,
                    marginLeft: ml,
                    marginBottom: mb,
                    marginTop: mt,
                    padding: p,
                    paddingTop: pt,
                    paddingBottom: pb,
                    paddingRight: pr,
                    paddingLeft: pl,
                    width: w ? w : '100%',
                    height: h ? h : 50,
                }]}
                {...rest}
            >
                <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                    {
                        title ?
                            <CustomText style={{ color: color ? color : Colors.black, margin: 'auto' }}>{title}</CustomText>
                            :
                            children
                    }
                </View>

            </View>
        </TouchableRipple>
    )
}

export default Button

const styles = StyleSheet.create({})