import AsyncStorage from "@react-native-async-storage/async-storage";

const setStore = async (key, token) => {
  try {
    await AsyncStorage.setItem(key, token);
    return key
  } catch (e) {
    return null;
  }
};

const getStore = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data;
  } catch (e) {
    return null;
  }
};

const unsetStore = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    return null;
  }
};

export { setStore, getStore, unsetStore };
