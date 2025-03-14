import React from 'react';
import { View, StyleSheet, ViewProps, Platform, Dimensions } from 'react-native';

interface ScreenProps extends ViewProps {
  children: React.ReactNode;
}

const Screen: React.FC<ScreenProps> = ({ children, style, ...props }) => {
  return (
    <View 
      style={[
        styles.container, 
        Platform.OS === 'web' && styles.webContainer,
        style
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0f9fd',
  },
  webContainer: Platform.select({
    web: {
      maxWidth: 1200,
      marginHorizontal: 'auto',
      width: '100%',
      minHeight: height,
    },
    default: {}
  })
});

export default Screen;
