import React from 'react';
import { Text as RNText, StyleSheet, TextStyle } from 'react-native';

const styles = StyleSheet.create({
  Text: {
    color: '#030303',
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: '600',
    lineHeight: 31,
  },
});

const defaultProps = {
  text: 'Flexi',
};

interface TextProps {
  text?: string;
  style?: TextStyle;
}

const Text: React.FC<TextProps> = (props) => {
  return (
    <RNText style={[styles.Text, props.style]}>
      {props.text ?? defaultProps.text}
    </RNText>
  );
};

export default Text;
