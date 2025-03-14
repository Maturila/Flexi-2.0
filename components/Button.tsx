import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, StyleProp, ViewStyle, Platform } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  label?: string;
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 53,
    borderRadius: 12,
    backgroundColor: '#FFE600',
    alignItems: 'center',
    justifyContent: 'center',
    ...(Platform.OS === 'web' ? {
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
    } : {
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    }),
  },
  text: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#175d73',
  },
  loginText: {
    color: '#175d73',
  }
});

const Button: React.FC<ButtonProps> = ({ label = 'Login', style, onPress, ...props }) => {
  const isLoginButton = label === 'Login';
  
  return (
    <TouchableOpacity 
      style={[
        styles.button,
        isLoginButton && styles.loginButton,
        style
      ]} 
      onPress={onPress}
      {...props}
    >
      <Text style={[
        styles.text,
        isLoginButton && styles.loginText
      ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
