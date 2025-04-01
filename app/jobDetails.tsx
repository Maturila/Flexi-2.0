import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

// Mock job data
const jobDetails = {
  id: '1',
  title: 'Delivery Driver',
  company: 'Quick Delivery Services',
  location: 'ECR, Chennai',
  type: 'Full-time',
  salary: '₹18,000 - ₹25,000 /month',
  postedDate: 'Oct 5, 2023',
  description: 'We are looking for reliable delivery drivers to transport packages to customers. The ideal candidate will be a responsible driver with a clean driving record.',
  requirements: [
    'Valid driver license',
    'Clean driving record',
    'Ability to lift up to 25kg',
    'Good communication skills',
    'Flexible schedule including weekends'
  ],
  responsibilities: [
    'Deliver packages to customers in a timely manner',
    'Follow delivery instructions accurately',
    'Maintain delivery records and logs',
    'Handle cash and card payments',
    'Ensure vehicle maintenance and cleanliness'
  ],
  benefits: [
    'Competitive salary',
    'Fuel allowance',
    'Health insurance',
    'Performance bonuses',
    'Flexible working hours'
  ],
  workingHours: '8-10 hours per day',
  experience: '1-2 years',
  employerName: 'Quick Delivery Services',
  employerContact: 'contact@quickdelivery.com',
  employerEmail: 'info@quickdelivery.com',
  employerWebsite: 'www.quickdelivery.com',
  education: 'High School Diploma',
  status: 'Active'
};

const InfoSection = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const BulletList = ({ items }) => (
  <View style={styles.bulletList}>
    {items.map((item, index) => (
      <View key={index} style={styles.bulletItem}>
        <FontAwesome5 name="circle" size={6} color="#004d61" style={styles.bullet} />
        <Text style={styles.bulletText}>{item}</Text>
      </View>
    ))}
  </View>
);

export default function JobDetailsScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <FontAwesome5 name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Job Details</Text>
      </View>

      {/* Job Title Section */}
      <View style={styles.titleSection}>
        <View style={styles.companyLogo}>
          <FontAwesome5 name="building" size={30} color="#004d61" />
        </View>
        <Text style={styles.jobTitle}>{jobDetails.title}</Text>
        <Text style={styles.company}>{jobDetails.company}</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{jobDetails.status}</Text>
        </View>
      </View>

      {/* Quick Info */}
      <View style={styles.quickInfo}>
        <View style={styles.infoItem}>
          <FontAwesome5 name="map-marker-alt" size={16} color="#6b7280" />
          <Text style={styles.infoText}>{jobDetails.location}</Text>
        </View>
        <View style={styles.infoItem}>
          <FontAwesome5 name="clock" size={16} color="#6b7280" />
          <Text style={styles.infoText}>{jobDetails.workingHours}</Text>
        </View>
        <View style={styles.infoItem}>
          <FontAwesome5 name="money-bill-wave" size={16} color="#6b7280" />
          <Text style={styles.infoText}>{jobDetails.salary}</Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <InfoSection title="Job Description">
          <Text style={styles.descriptionText}>{jobDetails.description}</Text>
        </InfoSection>

        <InfoSection title="Requirements">
          <BulletList items={jobDetails.requirements} />
        </InfoSection>

        <InfoSection title="Responsibilities">
          <BulletList items={jobDetails.responsibilities} />
        </InfoSection>

        <InfoSection title="Benefits">
          <BulletList items={jobDetails.benefits} />
        </InfoSection>

        <InfoSection title="Employer Details">
          <View style={styles.additionalInfo}>
            <Text style={styles.infoValue}>{jobDetails.employerName}</Text>
            <Text style={styles.infoValue}>{jobDetails.employerContact}</Text>
            <Text style={styles.infoValue}>{jobDetails.employerEmail}</Text>
            <Text style={styles.infoValue}>{jobDetails.employerWebsite}</Text>

            <TouchableOpacity style={styles.viewProfileButton}>
              <Text style={styles.viewProfileText}>View Profile</Text>
            </TouchableOpacity>
          </View>
        </InfoSection>
      </View>

      {/* Apply Button */}
      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#004d61',
    padding: 20,
    paddingTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleSection: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  companyLogo: {
    width: 60,
    height: 60,
    backgroundColor: '#f3f4f6',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  company: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 8,
  },
  statusBadge: {
    backgroundColor: '#e0f2fe',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#004d61',
    fontWeight: '500',
  },
  quickInfo: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    marginLeft: 8,
    color: '#4b5563',
  },
  content: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  descriptionText: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 22,
  },
  bulletList: {
    marginLeft: 8,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bullet: {
    marginRight: 8,
  },
  bulletText: {
    fontSize: 14,
    color: '#4b5563',
    flex: 1,
  },
  additionalInfo: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
  },
  infoValue: {
    color: '#111827',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  applyButton: {
    backgroundColor: '#004d61',
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewProfileButton: {
    backgroundColor: '#004d61',
    padding: 8,
    borderRadius: 4,
    marginTop: 12,
    alignItems: 'center',
  },
  viewProfileText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
