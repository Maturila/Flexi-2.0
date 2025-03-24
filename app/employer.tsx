import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';

// Sample job data
const jobPosts = [
  { id: '1', title: 'Software Engineer', description: 'Develop and maintain web applications...', date: 'Oct 10, 2023', status: 'Open', color: '#28a745' },
  { id: '2', title: 'Marketing Specialist', description: 'Create marketing strategies to boost sales...', date: 'Oct 5, 2023', status: 'Close', color: '#dc3545' },
  { id: '3', title: 'Project Manager', description: 'Oversee project timelines and deliverables...', date: 'Oct 3, 2023', status: 'Pending', color: '#fd7e14' },
];

const SuitcaseIcon = () => {
  const iconStyle = {
    width: 35,
    height: 36,
    marginRight: 8,
  };

  return (
    <Svg style={iconStyle} viewBox="0 0 24 24">
      <Path d="M0 0h24v24H0zm10 5h4v2h-4zm0 0h4v2h-4z" fill="none" />
      <Path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z" fill="#030303" />
    </Svg>
  );
};

// Job Card Component
const JobCard = ({ job }: { job: any }) => (
  <View style={styles.jobCard}>
    <View style={styles.jobHeader}>
      <Text style={styles.jobTitle}>{job.title}</Text>
      <Text style={[styles.statusText, { color: job.color }]}>{job.status}</Text>
    </View>
    <Text style={styles.jobDescription}>{job.description}</Text>
    <Text style={styles.postedDate}>Posted on: {job.date}</Text>

    <View style={styles.actionContainer}>
      <TouchableOpacity style={styles.editBtn}>
        <Text style={styles.btnText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteBtn}>
        <Text style={styles.btnText}>Delete</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// Bottom Navigation Item Component
const BottomNavItem = ({ icon, onPress }: { icon: string; onPress?: () => void }) => (
  <TouchableOpacity style={styles.navItem} onPress={onPress}>
    <FontAwesome5 name={icon} size={24} color="#004d60" />
  </TouchableOpacity>
);

const EmployerDashboard = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>

      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => {}}>
          <FontAwesome5 name="bars" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <SuitcaseIcon />
          <Text style={styles.title}>Flexi</Text>
        </View>
        <TouchableOpacity>
          <FontAwesome5 name="user-circle" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Job Posts List */}
      <Text style={styles.sectionTitle}>Your Job Posts</Text>
      <FlatList
        data={jobPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <JobCard job={item} />}
        style={styles.list}
      />

      {/* View More Button */}
      <TouchableOpacity style={styles.viewMoreBtn}>
        <Text style={styles.viewMoreText}>View More</Text>
      </TouchableOpacity>

      {/* Action Buttons */}
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionText}>Post New Jobs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionText}>Previous Job Postings</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <BottomNavItem icon="home" onPress={() => router.push('/')} />
        <BottomNavItem icon="comments" onPress={() => router.push('/chats')} />
        <BottomNavItem icon="calendar-alt" onPress={() => router.push('/calendar')} />
        <BottomNavItem icon="bell" onPress={() => router.push('/notifications')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 3,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 15,
  },
  list: {
    flex: 1,
    marginBottom: 10,
  },
  jobCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    elevation: 3,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  jobDescription: {
    marginTop: 5,
    color: '#666',
  },
  postedDate: {
    marginTop: 5,
    color: '#999',
    fontSize: 12,
  },
  actionContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'flex-end',
  },
  editBtn: {
    backgroundColor: '#004d60',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 10,
  },
  deleteBtn: {
    backgroundColor: '#f44336',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  viewMoreBtn: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  viewMoreText: {
    fontWeight: 'bold',
  },
  actionButton: {
    backgroundColor: '#004d60',
    paddingVertical: 10,
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    elevation: 5,
  },
  navItem: {
    padding: 10,
  },
});

export default EmployerDashboard;
