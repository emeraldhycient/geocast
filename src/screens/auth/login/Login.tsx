import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../../components/common/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = ({navigation}:any) => {
  return (
    <View>
          <CustomHeader title='Sign in to GeoCast' leftIcon={<MaterialCommunityIcons name='arrow-left' size={20} />} onLeftPress={() => navigation.goBack()} />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})