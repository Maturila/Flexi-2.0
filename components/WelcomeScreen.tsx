import React from 'react';
import { View, StyleSheet, Image, Text, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import Screen from './Screen';
import Button from './Button';

interface WelcomeScreenProps {}

const WelcomeScreen: React.FC<WelcomeScreenProps> = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/(tabs)');
  };

  const handleLogin = () => {
    router.push('/(auth)/login');
  };

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <FontAwesome name="briefcase" size={36} color="#175d73" style={styles.icon} />
              <Text style={styles.title}>Flexi</Text>
            </View>
            <Text style={styles.subtitle}>Find short-term gigs easily.</Text>
          </View>
          
          <View style={styles.mainContent}>
            <View style={styles.imageWrapper}>
              <Image 
                source={require('../assets/images/welcome_screen_cycle.png')}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          </View>
          
          <View style={styles.buttonContainer}>
            <Button 
              label="Get Started" 
              onPress={handleGetStarted}
              style={styles.button} 
            />
            <View style={styles.buttonSpacing} />
            <Button 
              label="Login" 
              onPress={handleLogin}
              style={[styles.button, styles.loginButton]} 
            />
          </View>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0f9fd',
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    maxWidth: 480,
    width: '100%',
    marginHorizontal: 'auto',
  },
  header: {
    alignItems: 'center',
    marginTop: Platform.OS === 'web' ? 48 : 64,
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  icon: {
    marginRight: 16,
  },
  title: {
    fontSize: 44,
    fontWeight: '700',
    color: '#175d73',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 18,
    color: '#175d73',
    opacity: 0.8,
    textAlign: 'center',
  },
  mainContent: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingVertical: Platform.OS === 'web' ? 60 : 40,
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: 1,
    maxWidth: 360,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 24,
    marginHorizontal: 'auto',
    ...(Platform.OS === 'web' ? {
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    } : {
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.15,
      shadowRadius: 8,
    }),
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 360,
    marginBottom: Platform.OS === 'web' ? 48 : 32,
  },
  button: {
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#ffffff',
  },
  buttonSpacing: {
    height: 16,
  },
});

export default WelcomeScreen;
