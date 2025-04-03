import React from 'react';
import { useRouter } from 'expo-router';
import { View, StyleSheet, ScrollView } from 'react-native';
import Screen from '../../components/Screen';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Text from '../../components/Text';

const upcomingEvents = [
  {
    title: 'Annual Company Meeting',
    date: 'Date: January 15, 2024',
    description: "Join us for the annual meeting to discuss the company's performance and future plans.",
  },
  {
    title: 'Team Building Retreat',
    date: 'Date: February 10, 2024',
    description: 'A fun and engaging retreat to strengthen team bonds and improve collaboration.',
  },
  {
    title: 'Quarterly Review',
    date: 'Date: March 5, 2024',
    description: "Review the first quarter's results and set goals for the next quarter.",
  },
];

export default function HomeScreen() {
  const router = useRouter();
  return (
    <Screen>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button 
              label="Employee" 
              onPress={() => router.push('/employee')} 
              style={styles.button}
            />
            <Button 
              label="Employer" 
              onPress={() => router.push('/employer')} 
              style={styles.button}
            />
            
          </View>

          <View style={styles.eventsSection}>
            <Text text="Upcoming Events" style={styles.sectionTitle} />
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                title={event.title}
                date={event.date}
                description={event.description}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#E5F6FB',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  buttonContainer: {
    gap: 12,
    marginBottom: 24,
  },
  button: {
    width: '100%',
  },
  eventsSection: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#175d73',
    marginBottom: 8,
  },
});
