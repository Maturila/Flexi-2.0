import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const notifications = [
  {
    id: '1',
    type: 'application',
    title: 'New Job Application',
    message: 'Your application for Delivery Driver position has been received',
    time: '2 hours ago',
    unread: true,
  },
  {
    id: '2',
    type: 'payment',
    title: 'Payment Received',
    message: 'You have received ₹15,000 for Store Assistant work',
    time: '5 hours ago',
    unread: true,
  },
  {
    id: '3',
    type: 'job',
    title: 'New Job Match',
    message: 'A new job matching your skills is available',
    time: '1 day ago',
    unread: false,
  },
  {
    id: '4',
    type: 'reminder',
    title: 'Shift Reminder',
    message: 'Your shift at SuperMart starts in 2 hours',
    time: '1 day ago',
    unread: false,
  },
  {
    id: '5',
    type: 'update',
    title: 'Profile Update',
    message: 'Please update your work availability',
    time: '2 days ago',
    unread: false,
  },
];

const NotificationIcon = ({ type }) => {
  const iconMap = {
    application: 'file-alt',
    payment: 'money-bill-wave',
    job: 'briefcase',
    reminder: 'clock',
    update: 'user-edit',
  };

  const colorMap = {
    application: '#4f46e5',
    payment: '#22c55e',
    job: '#f59e0b',
    reminder: '#ef4444',
    update: '#6366f1',
  };

  return (
    <View style={[styles.iconContainer, { backgroundColor: colorMap[type] }]}>
      <FontAwesome5 name={iconMap[type]} size={16} color="#fff" />
    </View>
  );
};

const NotificationItem = ({ item }) => (
  <TouchableOpacity style={[styles.notificationItem, item.unread && styles.unread]}>
    <NotificationIcon type={item.type} />
    <View style={styles.notificationContent}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationMessage}>{item.message}</Text>
      <Text style={styles.notificationTime}>{item.time}</Text>
    </View>
    {item.unread && <View style={styles.unreadDot} />}
  </TouchableOpacity>
);

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../../assets/images/JobPostingScreen_Image.png')} 
        style={styles.header}
      >
        <View style={styles.headerOverlay}>
          <Text style={styles.headerTitle}>Notifications</Text>
          <Text style={styles.headerSubtitle}>Stay updated with your job activities</Text>
        </View>
      </ImageBackground>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={[styles.filterButton, styles.activeFilter]}>
          <Text style={styles.activeFilterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Unread</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Payments</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={notifications}
        renderItem={({ item }) => <NotificationItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    height: 180,
    justifyContent: 'center',
  },
  headerOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  filterContainer: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
  },
  activeFilter: {
    backgroundColor: '#004d61',
  },
  filterText: {
    color: '#6b7280',
    fontWeight: '500',
  },
  activeFilterText: {
    color: '#fff',
    fontWeight: '500',
  },
  listContainer: {
    padding: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 2,
  },
  unread: {
    backgroundColor: '#f0f9ff',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 12,
    color: '#6b7280',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#004d61',
    marginLeft: 8,
  },
});
