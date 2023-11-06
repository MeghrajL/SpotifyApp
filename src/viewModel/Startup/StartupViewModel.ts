import AsyncStorage from '@react-native-async-storage/async-storage';
import { requestRefreshedAccessTokenAsync, setTokens } from '@/store/authSlice';
import theme, { changeTheme, setDefaultTheme } from '../../store/theme';
import { AppDispatch } from '@/store';
import { StartupScreenNavigationProp } from 'types/navigation';

const initializeStartup = async (
  dispatch: AppDispatch,
  navigation: StartupScreenNavigationProp,
) => {
  // dispatch(changeTheme({ theme, true }));
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
    console.log('new access token generated using refresh token');

    dispatch(requestRefreshedAccessTokenAsync(refreshToken));
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
    return;
  }

  dispatch(setTokens({ accessToken, refreshToken }));
  await setDefaultTheme({ theme: 'default', darkMode: true });
  // onChangeTheme({ darkMode: true });
  navigation.reset({
    index: 0,
    routes: [{ name: 'Main' }],
  });
};

export const StartupViewModel = {
  initialize: initializeStartup,
};
