import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getPlaylists, getProfile } from '@/store/userSlice/actions';
import { useAppDispatch, useAppSelector } from '@/store';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '@/theme/Variables';
import { ThemeState, changeTheme } from '@/store/theme';
import { Common, Gutters, Images } from '@/theme';
import { useTheme } from '@/hooks';
import { t } from 'i18next';
import RecentBar from './RecentBar';

const fetchToken = async () => {
  const authData = await AsyncStorage.getItem('authData');
  console.log(authData);
};

const Home = () => {
  const { Fonts, darkMode: isDark } = useTheme();
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(state => state.authSlice.accessToken);
  const profileData = useAppSelector(state => state.userSlice.profile);
  const playlistData = useAppSelector(state => state.userSlice.playlists);
  useEffect(() => {
    dispatch(getProfile(accessToken));
    dispatch(getPlaylists({ accessToken: accessToken, limit: 6 }));
  }, [dispatch]);

  let evenPlaylists = [];
  // useEffect(() => {
  //   console.log('$$$$', playlistData?.items.length);
  //   // evenPlaylists = makeArrayEven(playlistData?.items);
  //   // console.log('&&&', evenPlaylists.length);
  // }, [playlistData?.items]);

  const fetch = () => {
    console.log('f', accessToken);

    dispatch(getProfile(accessToken));
    dispatch(getPlaylists({ accessToken: accessToken, limit: 5 }));
  };

  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }));
  };

  function makeArrayEven(arr) {
    console.log('>', arr.length);
    if (arr.length % 2 === 0) {
      return arr;
    } else {
      return arr.slice(0, -1);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        useAngle={true}
        angle={120}
        angleCenter={{ x: 0.3, y: 0.7 }}
        locations={[0.1, 0.35]}
        colors={['#303030', '#000000']}
        style={{ flex: 1 }}
      >
        <ScrollView>
          <View>
            <Image
              source={{ uri: profileData?.images[0].url }}
              style={{ height: 20, width: 20 }}
            />

            <Text style={[Fonts.titleRegular]}>Home</Text>
            <Button
              title="del"
              onPress={() => {
                AsyncStorage.removeItem('authData');
              }}
            />
            <Button title="fetch" onPress={() => fetch()} />
          </View>

          <FlatList
            scrollEnabled={false}
            numColumns={2}
            data={
              playlistData?.items.length % 2 === 0
                ? playlistData?.items
                : playlistData?.items.slice(0, -1)
            }
            renderItem={({ item }) => <RecentBar item={item} />}
            contentContainerStyle={{
              marginVertical: 10,
            }}
            columnWrapperStyle={{
              justifyContent: 'space-evenly',
              marginBottom: 10,
            }}
          />

          <TouchableOpacity
            // style={[Common.button.circle, Gutters.regularBMargin]}
            onPress={() => onChangeTheme({ darkMode: !isDark })}
          >
            {/* <Image
            // source={Images.icons.colors}
            style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
          /> */}
            <Text>theme</Text>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
