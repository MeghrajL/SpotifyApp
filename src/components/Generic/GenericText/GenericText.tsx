import { StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';

interface IGenericText {
  children: any;
  textType?: 'regular' | 'bold' | 'demi' | 'medium';
  style?: TextStyle | TextStyle[];
  props?: TextStyle | TextStyle[];
  numberOfLines?: number;
}

/**
 * @author Meghraj Vilas Lot
 * @param {IGenericText}
 * @description renders text in Gilroy font
 * @returns jsx for generic text
 */

const GenericText = ({
  children,
  textType,
  style,
  props,
  numberOfLines,
}: IGenericText) => {
  let textStyle: {};
  switch (textType) {
    case 'regular':
      textStyle = styles.regular;
      break;
    case 'bold':
      textStyle = styles.bold;
      break;
    case 'demi':
      textStyle = styles.demi;
      break;
    case 'medium':
      textStyle = styles.medium;
      break;
    default:
      textStyle = styles.regular;
      break;
  }
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[textStyle, { ...style }, { ...props }]}
    >
      {children}
    </Text>
  );
};

export default GenericText;

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'Avenir Next Regular',
  },
  bold: {
    fontFamily: 'Avenir Next Bold',
  },
  demi: {
    fontFamily: 'Avenir Next Demi Bold',
  },
  medium: {
    fontFamily: 'Avenir Next Medium',
  },
});
