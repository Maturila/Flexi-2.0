import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';

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

type DashboardButtonProps = {
  icon: string;
  text: string;
  onPress?: () => void;
};

type BottomNavItemProps = {
  icon: string;
  onPress?: () => void;
};

const DashboardButton: React.FC<DashboardButtonProps> = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <FontAwesome5 name={icon} size={24} color="#004d60" />
    <Text style={styles.cardText}>{text}</Text>
  </TouchableOpacity>
);

const BottomNavItem: React.FC<BottomNavItemProps> = ({ icon, onPress }) => (
  <TouchableOpacity style={styles.navItem} onPress={onPress}>
    <FontAwesome5 name={icon} size={24} color="#004d60" />
  </TouchableOpacity>
);

const EmployeeDashboard: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
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

      {/* Dashboard Buttons */}
      <View style={styles.gridContainer}>
        <DashboardButton 
          icon="briefcase" 
          text="Job Postings" 
          onPress={() => router.push('/jobPostings')}
        />
        <DashboardButton 
          icon="check-circle" 
          text="Accepted Jobs" 
          onPress={() => router.push('/acceptedJobs')}
        />
        <DashboardButton 
          icon="history" 
          text="Previous Jobs" 
          onPress={() => router.push('/previousJobs')}
        />
        <DashboardButton 
          icon="money-bill-wave" 
          text="Payment History" 
          onPress={() => router.push('/paymentHistory')}
        />
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <BottomNavItem icon="home" onPress={() => router.push('/')} />
        <BottomNavItem icon="comments" onPress={() => router.push('/chats')} />
        <BottomNavItem icon="calendar-alt" onPress={() => router.push('/calendar')} />
        <BottomNavItem icon="bell" onPress={() => router.push('/notifications')} />
      </View>
    </View>
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
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  card: {
    width: '40%',
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  cardText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '500',
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

export default EmployeeDashboard;
