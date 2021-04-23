import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('user-token');
    if (token) return token;
    return undefined;
  } catch (error) {
    console.warn('Get Token - Async Storage', error);
    return undefined;
  }
};

const setToken = async (userToken: string) => {
  try {
    await AsyncStorage.setItem('user-token', userToken);
  } catch (error) {
    console.warn('Set Token - Async Storage', error);
  }
};

export { getToken, setToken };
