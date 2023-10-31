import React, { useEffect, useState } from 'react';
import { Example, Home } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { requestRefreshedAccessTokenAsync, setTokens } from '@/store/authSlice';
import { useDispatch } from 'react-redux';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = ({ navigation }) => {
  // let route = 'Home';
  // const dispatch = useDispatch();
  // const [isLoggedIn, setLoggedIn] = useState(false);
  // useEffect(() => {
  //   const tryLogin = async () => {
  //     const authData = await AsyncStorage.getItem('authData');
  //     if (!authData) return;

  //     const { accessToken, refreshToken, accessTokenExpirationDate } =
  //       await JSON.parse(authData);

  //     console.log(
  //       'date',
  //       new Date(accessTokenExpirationDate) <= new Date(),
  //       'access',
  //       accessToken,
  //       'r',
  //       refreshToken,
  //     );

  //     if (
  //       new Date(accessTokenExpirationDate) <= new Date() ||
  //       !accessToken ||
  //       !refreshToken
  //     ) {
  //       dispatch(requestRefreshedAccessTokenAsync(refreshToken));
  //       return;
  //     }
  //     dispatch(setTokens({ accessToken, refreshToken }));
  //     // navigation.replace('Home');
  //     setLoggedIn(true);
  //   };
  //   tryLogin();
  // }, [dispatch]);

  // console.log(isLoggedIn);
  // // route = isLoggedIn ? 'Home' : 'Example';
  // if (isLoggedIn !== true) route = 'Example';
  // console.log(route);

  return (
    <Stack.Navigator
      // initialRouteName={route}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Example" component={Example} /> */}
    </Stack.Navigator>
  );
};

export default MainNavigator;
