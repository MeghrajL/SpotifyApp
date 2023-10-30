import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
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
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
