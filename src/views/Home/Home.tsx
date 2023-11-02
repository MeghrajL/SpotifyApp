import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getProfile } from '@/store/userSlice/actions';
import { useAppDispatch, useAppSelector } from '@/store';

const fetchToken = async () => {
  const authData = await AsyncStorage.getItem('authData');
  console.log(authData);
};

const Home = () => {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(state => state.authSlice.accessToken);
  const profileData = useAppSelector(state => state.userSlice.profile);
  useEffect(() => {
    dispatch(getProfile(accessToken));
  }, [dispatch]);
  console.log(profileData?.images);

  return (
    <SafeAreaView>
      <View>
        <Image
          source={{ uri: profileData?.images[0].url }}
          style={{ height: 20, width: 20 }}
        />
        <Text>Home</Text>
        <Button
          title="del"
          onPress={() => {
            AsyncStorage.removeItem('authData');
          }}
        />
        <Button
          title="fetch"
          onPress={() => dispatch(getProfile(accessToken))}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
