import AsyncStorage from '@react-native-async-storage/async-storage'

const KEY = 'token'

const setToken = async (token) => {
    try {
        await AsyncStorage.setItem(KEY, token)
    } catch (e) {
        return null
    }
}

const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem(KEY)
        return token
    } catch (e) {
        return null
    }
}

const unsetToken = async () => {
    try {
        await AsyncStorage.removeItem(KEY)
    } catch (e) {
        return null
    }
}

export { setToken, getToken, unsetToken }
