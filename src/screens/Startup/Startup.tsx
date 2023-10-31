import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useTheme } from '../../hooks';
import { Brand } from '../../components';
import { setDefaultTheme } from '../../store/theme';
import { ApplicationScreenProps } from '../../../@types/navigation';
import { requestRefreshedAccessTokenAsync, setTokens } from '@/store/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { init } from 'i18next';
import { useDispatch } from 'react-redux';

const Startup = ({ navigation }: ApplicationScreenProps) => {
  const { Layout, Gutters } = useTheme();
  let route = 'Home';
  const dispatch = useDispatch();
  const [isLoggedIn, setLoggedIn] = useState(false);

  const init = async () => {
    // await new Promise(resolve =>
    //   setTimeout(() => {
    //     resolve(true);
    //   }, 1),

    const authData = await AsyncStorage.getItem('authData');

    if (!authData) {
      navigation.navigate('Example');
      return;
    }

    const { accessToken, refreshToken, accessTokenExpirationDate } =
      await JSON.parse(authData);

    console.log(
      'date',
      new Date(accessTokenExpirationDate) <= new Date(),
      'access',
      accessToken,
      'r',
      refreshToken,
    );

    if (
      new Date(accessTokenExpirationDate) <= new Date() ||
      !accessToken ||
      !refreshToken
    ) {
      dispatch(requestRefreshedAccessTokenAsync(refreshToken));
      return;
    }

    dispatch(setTokens({ accessToken, refreshToken }));
    setLoggedIn(true);
    await setDefaultTheme({ theme: 'default', darkMode: null });
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
    </View>
  );
};

export default Startup;
