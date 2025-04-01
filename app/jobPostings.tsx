import React from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

const jobs = [
  { 
    id: '1', 
    title: 'Driver', 
    location: 'ECR, Chennai', 
    date: 'Oct 5, 2023',
    salary: '₹18,000 - ₹25,000',
    type: 'Full-time'
  },
  { 
    id: '2', 
    title: 'Petrol Station worker', 
    location: 'Anna Nagar, Chennai', 
    date: 'Oct 3, 2023',
    salary: '₹15,000 - ₹20,000',
    type: 'Part-time'
  },
  { 
    id: '3', 
    title: 'Cashier', 
    location: 'Guindy, Chennai', 
    date: 'Oct 1, 2023',
    salary: '₹12,000 - ₹15,000',
    type: 'Full-time'
  },
];

export default function JobPostingScreen() {
  const router = useRouter();

  const renderJobCard = ({ item }) => (
    <View style={styles.jobCard}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <View style={styles.jobInfo}>
        <View style={styles.infoItem}>
          <FontAwesome5 name="map-marker-alt" size={14} color="#6b7280" />
          <Text style={styles.jobDetails}>{item.location}</Text>
        </View>
        <View style={styles.infoItem}>
          <FontAwesome5 name="clock" size={14} color="#6b7280" />
          <Text style={styles.jobDetails}>{item.type}</Text>
        </View>
        <View style={styles.infoItem}>
          <FontAwesome5 name="money-bill-wave" size={14} color="#6b7280" />
          <Text style={styles.jobDetails}>{item.salary}</Text>
        </View>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.postedDate}>Posted: {item.date}</Text>
        <TouchableOpacity 
          style={styles.viewDetailsButton}
          onPress={() => router.push('/jobDetails')}
        >
          <Text style={styles.viewDetailsText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesome5 name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Job Listings</Text>
        <TouchableOpacity onPress={() => router.push('/profile')}>
          <FontAwesome5 name="user-circle" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <FontAwesome5 name="search" size={16} color="#6b7280" style={styles.searchIcon} />
          <TextInput 
            style={styles.searchInput} 
            placeholder="Search for jobs..." 
            placeholderTextColor="#777" 
          />
        </View>
      </View>
      
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={renderJobCard}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 10,
    elevation: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  searchContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#111827',
  },
  listContainer: {
    padding: 15,
  },
  jobCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  jobInfo: {
    marginBottom: 12,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  jobDetails: {
    color: '#6b7280',
    marginLeft: 8,
    fontSize: 14,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  postedDate: {
    color: '#6b7280',
    fontSize: 12,
  },
  viewDetailsButton: {
    backgroundColor: '#004d61',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  viewDetailsText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
  },
});
