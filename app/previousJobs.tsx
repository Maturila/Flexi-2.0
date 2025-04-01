import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const previousJobs = [
  {
    id: '1',
    title: 'Graphic Designer',
    location: 'New York, NY',
    date: 'March 5, 2023',
  },
  {
    id: '2',
    title: 'Web Developer',
    location: 'San Francisco, CA',
    date: 'February 10, 2023',
  },
  {
    id: '3',
    title: 'Content Writer',
    location: 'Austin, TX',
    date: 'January 22, 2023',
  },
];

const PreviousJobsScreen = () => {
  const router = useRouter();

  const renderJobItem = ({ item }) => (
    <View style={styles.jobCard}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.jobDetails}>Location: {item.location}</Text>
      <Text style={styles.jobDate}>Date: {item.date}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Past Flexi Positions</Text>
      </View>

      <FlatList
        data={previousJobs}
        renderItem={renderJobItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0f9fd',
  },
  header: {
    backgroundColor: '#ffffff',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.67,
    borderBottomColor: '#e5e7eb',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  backButton: {
    marginRight: 15,
  },
  backButtonText: {
    color: '#030303',
    fontSize: 16,
  },
  headerText: {
    color: '#030303',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  listContainer: {
    padding: 15,
  },
  jobCard: {
    backgroundColor: '#ffffff',
    borderRadius: 6,
    padding: 15,
    marginBottom: 15,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#030303',
  },
  jobDetails: {
    color: '#898989',
    fontSize: 14,
  },
  jobDate: {
    color: '#898989',
    fontSize: 14,
  },
});

export default PreviousJobsScreen;
