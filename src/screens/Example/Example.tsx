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
import {
  authenticateUserAsync,
  requestRefreshedAccessTokenAsync,
  setTokens,
} from '@/store/authSlice';
import { styles } from './style';
const Example = ({ navigation }) => {
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

  function authenticate() {
    dispatch(authenticateUserAsync())
      .unwrap()
      .then(() => {
        console.log('nav');
        // navigation.('Home');
        navigation.reset({
          index: 0,
          routes: [{ name: 'Main' }],
        });
      })
      .catch(err => {
        console.log('err', err);
      });
  }

  const fetchtoken = async () => {
    const authData = await AsyncStorage.getItem('authData');
    console.log(authData);
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.dark }}>
      <ImageBackground
        source={require('../../theme/assets/images/login-background.png')}
        resizeMode="stretch"
        style={styles.bgImg}
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
              styles.mainView,
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
              style={styles.logo}
            />

            <GenericText textType="bold" style={styles.text}>
              Millions of songs.{'\n'}Free on Spotify.
            </GenericText>
            <View style={styles.btnsContainer}>
              <TouchableOpacity
                onPress={authenticate}
                style={styles.spotifyBtn}
              >
                <GenericText textType="bold" style={styles.btntext}>
                  Sign In with Spotify
                </GenericText>
              </TouchableOpacity>
              <LoginButton
                iconColor={'white'}
                icon={'google'}
                text={'Continue with Google'}
                onPress={() => {
                  fetchtoken();
                }}
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
