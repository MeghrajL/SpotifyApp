import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Fonts } from '@/theme';
import GenericText from '@/components/Generic/GenericText/GenericText';

const RecentBar = ({ item }) => {
  console.log(item, '>', item.images[0].url);
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#5f5f5f',
        width: '45%',
        height: 56,
        borderRadius: 5,
        // flexDirection: 'row',
        // marginLeft: 10,
        shadowColor: 'black',
        shadowOffset: { height: 3, width: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 4,

        // margin: 10,
        // overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
      }}
    >
      <View
        style={{
          borderRadius: 5,
          overflow: 'hidden',
          //   paddingBottom: 5,
          //   flex: 1,
          height: '100%',
          width: '100%',
          flexDirection: 'row',
        }}
      >
        {/* <Text>{item.name}</Text> */}
        <View
          style={{
            height: '100%',
            width: '30%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            resizeMode="stretch"
            source={{ uri: item.images[0].url }}
            style={{
              height: '100%',
              width: '100%',
              // justifyContent: 'center',
              // alignItems: 'center',
            }}
          />
        </View>
        <View
          style={{ width: '70%', height: '100%', justifyContent: 'center' }}
        >
          <GenericText
            ellipsizeMode="tail"
            maxLength={10}
            numberOfLines={2}
            textType="bold"
            style={{
              //   backgroundColor: 'red',
              color: 'white',
              fontSize: 15,
              padding: 5,
              //   textAlign: 'center',
              //   alignItems: 'center',
            }}
          >
            {item.name}
          </GenericText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecentBar;

const styles = StyleSheet.create({});
