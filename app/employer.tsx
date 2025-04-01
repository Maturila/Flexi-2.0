import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const jobData = [
  {
    id: '1',
    title: 'Software Engineer',
    description: 'Develop and maintain web applications...',
    postedOn: 'Oct 10, 2023',
    status: 'Open',
  },
  {
    id: '2',
    title: 'Marketing Specialist',
    description: 'Create marketing strategies to boost sales...',
    postedOn: 'Oct 5, 2023',
    status: 'Closed',
  },
  {
    id: '3',
    title: 'Project Manager',
    description: 'Oversee project timelines and deliverables...',
    postedOn: 'Oct 3, 2023',
    status: 'Pending',
  },
];

const StatusTag = ({ status }) => {
  const colorMap = {
    Open: '#22c55e',
    Closed: '#ef4444',
    Pending: '#facc15',
  };

  return <Text style={[styles.statusTag, { color: colorMap[status] }]}>{status}</Text>;
};

const JobCard = ({ job }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.jobTitle}>{job.title}</Text>
      <StatusTag status={job.status} />
    </View>
    <Text style={styles.jobDescription}>{job.description}</Text>
    <Text style={styles.postedDate}>Posted on: {job.postedOn}</Text>
    <View style={styles.buttonRow}>
      <TouchableOpacity style={styles.editBtn}>
        <Text style={styles.btnText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteBtn}>
        <Text style={styles.btnText}>Delete</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function EmployerDashboard() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome5 name="bars" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.logoText}>Flexi</Text>
        <TouchableOpacity onPress={() => router.push('/profile')}>
          <FontAwesome5 name="user-circle" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Section Title */}
      <Text style={styles.sectionTitle}>Your Job Posts</Text>

      {/* Job List */}
      <FlatList
        data={jobData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <JobCard job={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* View More */}
      <TouchableOpacity style={styles.viewMore}>
        <Text style={styles.viewMoreText}>View More</Text>
      </TouchableOpacity>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity 
          style={styles.bottomBtn}
          onPress={() => router.push('/createJob')}
        >
          <Text style={styles.bottomBtnText}>Post New Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.bottomBtn}
          onPress={() => router.push('/previousJobs')}
        >
          <Text style={styles.bottomBtnText}>Previous Job Postings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  card: {
    backgroundColor: '#f9fafb',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  jobTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  statusTag: {
    fontWeight: 'bold',
  },
  jobDescription: {
    marginVertical: 4,
    color: '#374151',
  },
  postedDate: {
    fontSize: 12,
    color: '#9ca3af',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10,
  },
  editBtn: {
    backgroundColor: '#0f172a',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  deleteBtn: {
    backgroundColor: '#facc15',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  viewMore: {
    backgroundColor: '#facc15',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  viewMoreText: {
    fontWeight: 'bold',
  },
  bottomButtons: {
    marginTop: 16,
    marginBottom: 20,
  },
  bottomBtn: {
    backgroundColor: '#0f4c5c',
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 6,
    alignItems: 'center',
  },
  bottomBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
