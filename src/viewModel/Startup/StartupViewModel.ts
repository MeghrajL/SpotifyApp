import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { ApplicationScreenProps } from '../../../@types/navigation';
import { requestRefreshedAccessTokenAsync, setTokens } from '@/store/authSlice';
import { setDefaultTheme } from '../../store/theme';

const initializeStartup = async (dispatch, navigation) => {
  const authData = await AsyncStorage.getItem('authData');

  if (!authData) {
    navigation.replace('Example');
    return;
  }

  const { accessToken, refreshToken, accessTokenExpirationDate } =
    JSON.parse(authData);

  if (
    new Date(accessTokenExpirationDate) <= new Date() ||
    !accessToken ||
    !refreshToken
  ) {
    dispatch(requestRefreshedAccessTokenAsync(refreshToken));
    return;
  }

  dispatch(setTokens({ accessToken, refreshToken }));
  await setDefaultTheme({ theme: 'default', darkMode: null });
  navigation.reset({
    index: 0,
    routes: [{ name: 'Main' }],
  });
};

export const StartupViewModel = {
  initialize: initializeStartup,
};
