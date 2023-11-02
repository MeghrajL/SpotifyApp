import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import {
  authenticateUserAsync,
  requestRefreshedAccessTokenAsync,
  setTokens,
} from '@/store/authSlice';
import { ExampleScreenNavigationProp } from 'types/navigation';
import { AppDispatch } from '@/store';

const authenticateUser = async (
  dispatch: AppDispatch,
  navigation: ExampleScreenNavigationProp,
) => {
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
