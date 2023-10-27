import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import GenericText from '../Generic/GenericText/GenericText';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '@/theme/Variables';
import { Layout } from '@/theme';

const LoginButton = ({ icon, text, onPress, iconColor }) => {
  console.log(icon);

  const iconImages = {
    google: require('../../theme/assets/images/google.png'),
    facebook: require('../../theme/assets/images/facebook.png'),
    apple: require('../../theme/assets/images/apple.png'),
    // Add more mappings as needed
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: Colors.transparent,
        padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 50,
        width: '90%',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        borderWidth: 0.5,
        borderColor: 'white',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View style={{ width: '10%' }}>
          {/* <Icon name={icon} size={25} color={iconColor} /> */}
          <Image
            source={iconImages[icon]}
            resizeMode="stretch"
            style={{ height: 25, width: 25 }}
          />
        </View>
        <View style={{ width: '90%' }}>
          <GenericText
            textType="bold"
            style={{
              color: 'white',
              fontSize: 18,
              alignSelf: 'center',
            }}
          >
            {text}
          </GenericText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LoginButton;

const styles = StyleSheet.create({});
