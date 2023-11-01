import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import {
  authenticateUserAsync,
  requestRefreshedAccessTokenAsync,
  setTokens,
} from '@/store/authSlice';

const authenticateUser = async (dispatch: any, navigation: any) => {
  try {
    await dispatch(authenticateUserAsync()).unwrap();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  } catch (error) {
    console.log('err', error);
  }
};

const fetchToken = async () => {
  const authData = await AsyncStorage.getItem('authData');
  console.log(authData);
};

export const ExampleViewModel = {
  authenticateUser,
  fetchToken,
};
