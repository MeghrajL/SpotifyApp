import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  Pressable,
  Button,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Brand } from '../../components';
import { useTheme } from '../../hooks';
import { useLazyFetchOneQuery } from '../../services/modules/users';
import { changeTheme, ThemeState } from '../../store/theme';
import i18next from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authorize } from 'react-native-app-auth';
import { Colors } from '@/theme/Variables';
import GenericText from '@/components/Generic/GenericText/GenericText';
import LoginButton from '@/components/Login/LoginButton';
const Example = () => {
  const { t } = useTranslation(['example', 'welcome']);
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    darkMode: isDark,
  } = useTheme();
  const dispatch = useDispatch();

  const [fetchOne, { data, isSuccess, isLoading, isFetching }] =
    useLazyFetchOneQuery();

  useEffect(() => {
    if (isSuccess && data?.name) {
      Alert.alert(t('example:helloUser', { name: data.name }));
    }
  }, [isSuccess, data]);

  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }));
  };

  const onChangeLanguage = (lang: 'fr' | 'en') => {
    i18next.changeLanguage(lang);
  };

  // const navigation = useNavigation();
  // useEffect(() => {
  //   const checkTokenValidity = async () => {
  //     const accessToken = await AsyncStorage.getItem('token');
  //     const expirationDate = await AsyncStorage.getItem('expirationDate');
  //     console.log('acess token', accessToken);
  //     console.log('expiration date', expirationDate);

  //     if (accessToken && expirationDate) {
  //       const currentTime = Date.now();
  //       if (currentTime < parseInt(expirationDate)) {
  //         // here the token is still valid
  //         // navigation.replace('Main');
  //         console.log('main');
  //       } else {
  //         // token would be expired so we need to remove it from the async storage
  //         AsyncStorage.removeItem('token');
  //         AsyncStorage.removeItem('expirationDate');
  //       }
  //     }
  //   };

  //   checkTokenValidity();
  // }, []);
  async function authenticate() {
    console.log('1');
    const config = {
      issuer: 'https://accounts.spotify.com',
      clientId: 'ecc2b06486e440d1abbe3e082cb8c634',
      redirectUrl: 'com.bird:/oauth',
      scopes: [
        'user-read-email',
        'user-library-read',
        'user-read-recently-played',
        'user-top-read',
        'playlist-read-private',
        'playlist-read-collaborative',
        'playlist-modify-public', // or "playlist-modify-private"
      ],
      serviceConfiguration: {
        authorizationEndpoint: 'https://accounts.spotify.com/authorize',
        tokenEndpoint: 'https://accounts.spotify.com/api/token',
      },
    };

    try {
      const result = await authorize(config);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    console.log('2');

    // if (result.accessToken) {
    //   const expirationDate = new Date(
    //     result.accessTokenExpirationDate,
    //   ).getTime();
    //   AsyncStorage.setItem('token', result.accessToken);
    //   AsyncStorage.setItem('expirationDate', expirationDate.toString());
    //   // navigation.navigate('Main');
    // }
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.dark }}>
      <ImageBackground
        source={require('../../theme/assets/images/login-background.png')}
        resizeMode="stretch"
        style={{ flex: 1, width: '100%', height: '68%' }}
      >
        <ScrollView
          bounces={false}
          style={Layout.fill}
          contentContainerStyle={[
            Layout.fullSize,
            Layout.fill,
            // Layout.colCenter,
            Layout.scrollSpaceBetween,
          ]}
        >
          <View
            style={[
              // { backgroundColor: 'red' },
              { paddingTop: '70%' },
              Layout.fill,
              // Layout.relative,
              Layout.fullWidth,
              Layout.justifyContentCenter,
              Layout.alignItemsCenter,
            ]}
          >
            <Image
              source={require('../../theme/assets/images/logo.png')}
              resizeMode="contain"
              style={{ height: 60, width: 60 }}
            />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <GenericText
                textType="bold"
                style={{
                  color: 'white',
                  fontSize: 35,
                  textAlign: 'center',
                }}
              >
                Millions of songs.{'\n'}Free on Spotify.
              </GenericText>
            </View>
            <View
              style={{
                width: '100%',
                paddingTop: '5%',
              }}
            >
              <TouchableOpacity
                onPress={authenticate}
                style={{
                  backgroundColor: Colors.green200,
                  padding: 10,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  height: 50,
                  width: '90%',
                  borderRadius: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: 10,
                }}
              >
                <GenericText
                  textType="bold"
                  style={{
                    color: 'black',
                    fontSize: 18,
                  }}
                >
                  Sign In with Spotify
                </GenericText>
              </TouchableOpacity>
              <LoginButton
                iconColor={'white'}
                icon={'google'}
                text={'Continue with Google'}
                onPress={() => {}}
              />
              <LoginButton
                iconColor={'white'}
                icon={'facebook'}
                text={'Continue with Facebook'}
                onPress={() => {}}
              />
              <LoginButton
                iconColor={'white'}
                icon={'apple'}
                text={'Continue with Apple'}
                onPress={() => {}}
              />
            </View>
          </View>
          {/* 
        <Button
          title="del"
          onPress={() => {
            AsyncStorage.removeItem('token');
            AsyncStorage.removeItem('expirationDate');
          }}
        /> */}

          {/* <View
              style={[
                Layout.row,
                Layout.justifyContentBetween,
                Layout.fullWidth,
                Gutters.smallTMargin,
              ]}
            > */}
          {/* <TouchableOpacity
            style={[Common.button.circle, Gutters.regularBMargin]}
            onPress={() => fetchOne(`${Math.ceil(Math.random() * 10 + 1)}`)}
          >
            {isFetching || isLoading ? (
              <ActivityIndicator />
            ) : (
              <Image
                source={Images.icons.send}
                style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
              />
            )}
          </TouchableOpacity> */}

          {/* <TouchableOpacity
                style={[Common.button.circle, Gutters.regularBMargin]}
                onPress={() => onChangeTheme({ darkMode: !isDark })}
              >
                <Image
                  source={Images.icons.colors}
                  style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
                />
              </TouchableOpacity> */}

          {/* <TouchableOpacity
            style={[Common.button.circle, Gutters.regularBMargin]}
            onPress={() =>
              onChangeLanguage(i18next.language === 'fr' ? 'en' : 'fr')
            }
          >
            <Image
              source={Images.icons.translate}
              style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
            />
          </TouchableOpacity> */}
          {/* </View> */}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Example;
