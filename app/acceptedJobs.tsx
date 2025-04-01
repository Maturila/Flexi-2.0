import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const acceptedJobs = [
  {
    id: '1',
    title: 'Driver',
    company: 'ABC Logistics',
    location: 'ECR, Chennai',
    startDate: 'Oct 10, 2023',
    salary: '₹15,000',
  },
  {
    id: '2',
    title: 'Cashier',
    company: 'XYZ Retail',
    location: 'Guindy, Chennai',
    startDate: 'Oct 15, 2023',
    salary: '₹22,000',
  },
];

const AcceptedJobsScreen = () => {
  const router = useRouter();

  const renderJobItem = ({ item }) => (
    <View style={styles.jobCard}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.companyName}>{item.company}</Text>
      <Text style={styles.jobDetails}>Location: {item.location}</Text>
      <Text style={styles.jobDetails}>Start Date: {item.startDate}</Text>
      <Text style={styles.salary}>Salary: {item.salary}</Text>
      <TouchableOpacity 
        style={styles.viewButton}
        onPress={() => router.push(`/jobDetails/${item.id}`)}
      >
        <Text style={styles.viewButtonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Accepted Jobs</Text>
      </View>

      <FlatList
        data={acceptedJobs}
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
  companyName: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  jobDetails: {
    color: '#898989',
    fontSize: 14,
  },
  salary: {
    color: '#11728d',
    fontWeight: 'bold',
    fontSize: 16,
  },
  viewButton: {
    backgroundColor: '#eef92d',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  viewButtonText: {
    color: '#11728d',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AcceptedJobsScreen;
