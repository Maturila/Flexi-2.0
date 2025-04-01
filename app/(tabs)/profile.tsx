import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

const mockUserData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+91 98765 43210',
  location: 'Chennai, Tamil Nadu',
  occupation: 'Professional Driver',
  experience: '5 years',
  skills: ['Delivery', 'Customer Service', 'Vehicle Maintenance', 'Time Management'],
  languages: ['English', 'Tamil', 'Hindi'],
  rating: 4.8,
  completedJobs: 156,
  profileImage: null
};

const ProfileSection = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const StatCard = ({ icon, value, label }) => (
  <View style={styles.statCard}>
    <FontAwesome5 name={icon} size={24} color="#004d61" />
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

export default function Profile() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Profile Summary */}
      <View style={styles.profileSummary}>
        <View style={styles.avatarContainer}>
          <FontAwesome5 name="user-circle" size={80} color="#004d61" />
          <TouchableOpacity style={styles.editButton}>
            <FontAwesome5 name="pencil-alt" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.userName}>{mockUserData.name}</Text>
        <Text style={styles.userOccupation}>{mockUserData.occupation}</Text>
        <View style={styles.ratingContainer}>
          <FontAwesome5 name="star" solid size={16} color="#fbbf24" />
          <Text style={styles.ratingText}>{mockUserData.rating}</Text>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <StatCard icon="briefcase" value={mockUserData.completedJobs} label="Jobs Completed" />
        <StatCard icon="star" value={mockUserData.rating} label="Rating" />
        <StatCard icon="clock" value="98%" label="On Time" />
      </View>

      {/* Contact Information */}
      <ProfileSection title="Contact Information">
        <View style={styles.infoRow}>
          <FontAwesome5 name="envelope" size={16} color="#6b7280" />
          <Text style={styles.infoText}>{mockUserData.email}</Text>
        </View>
        <View style={styles.infoRow}>
          <FontAwesome5 name="phone" size={16} color="#6b7280" />
          <Text style={styles.infoText}>{mockUserData.phone}</Text>
        </View>
        <View style={styles.infoRow}>
          <FontAwesome5 name="map-marker-alt" size={16} color="#6b7280" />
          <Text style={styles.infoText}>{mockUserData.location}</Text>
        </View>
      </ProfileSection>

      {/* Skills */}
      <ProfileSection title="Skills">
        <View style={styles.skillsContainer}>
          {mockUserData.skills.map((skill, index) => (
            <View key={index} style={styles.skillBadge}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </ProfileSection>

      {/* Languages */}
      <ProfileSection title="Languages">
        <View style={styles.skillsContainer}>
          {mockUserData.languages.map((language, index) => (
            <View key={index} style={styles.languageBadge}>
              <Text style={styles.languageText}>{language}</Text>
            </View>
          ))}
        </View>
      </ProfileSection>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewHistoryButton}>
          <Text style={styles.viewHistoryText}>View Work History</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  profileSummary: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  editButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#004d61',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  userOccupation: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  statCard: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
  },
  section: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#4b5563',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  skillBadge: {
    backgroundColor: '#e0f2fe',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    color: '#004d61',
    fontSize: 14,
    fontWeight: '500',
  },
  languageBadge: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  languageText: {
    color: '#4b5563',
    fontSize: 14,
    fontWeight: '500',
  },
  actionButtons: {
    padding: 16,
  },
  editProfileButton: {
    backgroundColor: '#004d61',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
  editProfileText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewHistoryButton: {
    backgroundColor: '#e0f2fe',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  viewHistoryText: {
    color: '#004d61',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
