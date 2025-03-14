import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Screen from './Screen';
import Card from './Card';
import Icon from './Icon';

interface SplashScreenProps {
  children?: React.ReactNode;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  cardContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  iconWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [
      { translateX: -24 },
      { translateY: -24 }
    ],
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  text: {
    marginTop: 20,
    fontSize: 24,
    color: '#175d73',
    fontWeight: '500',
  }
});

const SplashScreen: React.FC<SplashScreenProps> = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Card />
          <View style={styles.iconWrapper}>
            <Icon />
          </View>
          <Text style={styles.text}>Flexi</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Flexi</Text>
          <Icon />
        </View>
      </View>
    </Screen>
  );
};

export default SplashScreen;
