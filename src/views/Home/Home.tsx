import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '@/store/userSlice/actions';

const fetchToken = async () => {
  const authData = await AsyncStorage.getItem('authData');
  console.log(authData);
};

const Home = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.authSlice.accessToken);
  // console.log(accessToken);
  useEffect(() => {
    dispatch(getProfile(accessToken));
  }, [dispatch]);
  return (
    <SafeAreaView>
      <View>
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
