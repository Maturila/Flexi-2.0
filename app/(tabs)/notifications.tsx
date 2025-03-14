import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../../components/Text';

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text text="Notifications" style={styles.title} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5F6FB',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
