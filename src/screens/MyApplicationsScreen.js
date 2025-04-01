import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, FlatList, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const applications = [
  {
    id: '1',
    jobTitle: 'Driver',
    company: 'ABC Company',
    location: 'ECR, Chennai',
    status: 'Under Review',
    appliedDate: 'Oct 5, 2023',
  },
  {
    id: '2',
    jobTitle: 'Cashier',
    company: 'XYZ Store',
    location: 'Guindy, Chennai',
    status: 'Accepted',
    appliedDate: 'Oct 1, 2023',
  },
];

const MyApplicationsScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const renderApplicationItem = ({ item }) => (
    <View style={styles.applicationCard}>
      <Text style={styles.jobTitle}>{item.jobTitle}</Text>
      <Text style={styles.companyName}>{item.company}</Text>
      <Text style={styles.location}>{item.location}</Text>
      <View style={styles.statusContainer}>
        <Text style={styles.dateText}>Applied on: {item.appliedDate}</Text>
        <Text style={[
          styles.statusText,
          { color: item.status === 'Accepted' ? '#28a745' : '#ffc107' }
        ]}>{item.status}</Text>
      </View>
      <TouchableOpacity 
        style={styles.viewButton}
        onPress={() => navigation.navigate('JobDetails', { jobId: item.id })}
      >
        <Text style={styles.viewButtonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>My Applications</Text>
      </View>

      <FlatList
        data={applications}
        renderItem={renderApplicationItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2e64e5',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 15,
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 15,
  },
  applicationCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e64e5',
  },
  companyName: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  dateText: {
    fontSize: 14,
    color: '#888',
  },
  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  viewButton: {
    backgroundColor: '#2e64e5',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  viewButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyApplicationsScreen;
