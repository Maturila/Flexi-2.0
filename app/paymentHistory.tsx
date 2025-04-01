import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

const payments = [
  {
    id: '1',
    jobTitle: 'Delivery Driver',
    company: 'Quick Delivery',
    amount: '₹18,500',
    date: 'Oct 1, 2023',
    status: 'Completed',
    transactionId: 'TXN123456',
  },
  {
    id: '2',
    jobTitle: 'Store Assistant',
    company: 'Retail Plus',
    amount: '₹16,000',
    date: 'Sep 15, 2023',
    status: 'Completed',
    transactionId: 'TXN123457',
  },
  {
    id: '3',
    jobTitle: 'Cashier',
    company: 'SuperMart',
    amount: '₹12,000',
    date: 'Sep 1, 2023',
    status: 'Completed',
    transactionId: 'TXN123458',
  },
];

const PaymentHistoryScreen = () => {
  const router = useRouter();

  const renderPaymentItem = ({ item }) => (
    <View style={styles.paymentCard}>
      <View style={styles.paymentHeader}>
        <Text style={styles.jobTitle}>{item.jobTitle}</Text>
        <Text style={styles.amount}>{item.amount}</Text>
      </View>
      <Text style={styles.company}>{item.company}</Text>
      <View style={styles.detailsRow}>
        <Text style={styles.date}>Date: {item.date}</Text>
        <View style={styles.statusContainer}>
          <FontAwesome5 name="check-circle" solid size={14} color="#28a745" />
          <Text style={styles.status}>{item.status}</Text>
        </View>
      </View>
      <Text style={styles.transactionId}>Transaction ID: {item.transactionId}</Text>
      <TouchableOpacity style={styles.downloadButton}>
        <FontAwesome5 name="file-download" size={14} color="#2e64e5" />
        <Text style={styles.downloadText}>Download Receipt</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <FontAwesome5 name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Payment History</Text>
      </View>

      <View style={styles.totalEarnings}>
        <Text style={styles.totalLabel}>Total Earnings</Text>
        <Text style={styles.totalAmount}>₹46,500</Text>
        <Text style={styles.periodLabel}>Last 3 Months</Text>
      </View>

      <FlatList
        data={payments}
        renderItem={renderPaymentItem}
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
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  totalEarnings: {
    backgroundColor: '#2e64e5',
    padding: 20,
    alignItems: 'center',
  },
  totalLabel: {
    color: '#fff',
    fontSize: 16,
    opacity: 0.9,
  },
  totalAmount: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  periodLabel: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.8,
  },
  listContainer: {
    padding: 15,
  },
  paymentCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  paymentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e64e5',
    flex: 1,
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28a745',
  },
  company: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    marginLeft: 5,
    color: '#28a745',
    fontSize: 14,
    fontWeight: '500',
  },
  transactionId: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#e8f0fe',
  },
  downloadText: {
    color: '#2e64e5',
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '500',
  }})
