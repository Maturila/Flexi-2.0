import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

const CustomCheckbox = ({ value, onValueChange }) => (
  <TouchableOpacity 
    onPress={() => onValueChange(!value)}
    style={[
      styles.checkbox,
      value && styles.checkboxChecked
    ]}
  >
    {value && <FontAwesome5 name="check" size={12} color="white" />}
  </TouchableOpacity>
);

const InputWithLabel = ({ label, ...props }) => (
  <View style={styles.inputContainer}>
    <View style={styles.labelContainer}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.required}>Required</Text>
    </View>
    <TextInput
      style={[styles.input, props.multiline && { height: 100 }]}
      {...props}
    />
  </View>
);

export default function CreateJobScreen() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hours, setHours] = useState('');
  const [wage, setWage] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handlePostJob = () => {
    if (isChecked) {
      // Submit logic here
      console.log('Job posted:', { title, description, hours, wage, location, date });
      router.back(); // Navigate back to employer screen after posting
    } else {
      alert('Please agree to the deposit terms.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesome5 name="arrow-left" size={24} />
        </TouchableOpacity>
        <Text style={styles.logo}>Create New Job</Text>
        <TouchableOpacity>
          <FontAwesome5 name="user-circle" size={24} />
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <InputWithLabel
        label="Job Title"
        placeholder="Enter job title"
        value={title}
        onChangeText={setTitle}
      />
      <InputWithLabel
        label="Job Description"
        placeholder="Enter job description"
        value={description}
        multiline
        onChangeText={setDescription}
      />
      <InputWithLabel
        label="Hours Required"
        placeholder="Enter required hours"
        value={hours}
        onChangeText={setHours}
        keyboardType="numeric"
      />
      <InputWithLabel
        label="Wage"
        placeholder="Enter wage"
        value={wage}
        onChangeText={setWage}
        keyboardType="numeric"
      />
      <InputWithLabel
        label="Location"
        placeholder="Enter location"
        value={location}
        onChangeText={setLocation}
      />
      <InputWithLabel
        label="Date"
        placeholder="Enter date"
        value={date}
        onChangeText={setDate}
      />

      {/* Upload Button */}
      <TouchableOpacity style={styles.uploadBox}>
        <FontAwesome5 name="upload" size={20} color="#6b7280" />
        <Text style={{ color: '#6b7280', marginTop: 5 }}>Upload job images</Text>
      </TouchableOpacity>

      {/* Agreement Checkbox */}
      <View style={styles.checkboxContainer}>
        <CustomCheckbox
          value={isChecked}
          onValueChange={setIsChecked}
        />
        <Text style={styles.checkboxLabel}>
          I agree that a deposit of 20% of the wage will have to be paid if and when an employee
          takes up the above posted job.
        </Text>
      </View>

      {/* Post Job Button */}
      <TouchableOpacity style={styles.postButton} onPress={handlePostJob}>
        <Text style={styles.postButtonText}>Post job</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    paddingBottom: 80,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 20,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 16,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  required: {
    fontSize: 14,
    color: '#ef4444',
    marginLeft: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
  uploadBox: {
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    backgroundColor: '#e0f7ff',
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 4,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#000',
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 14,
    color: '#111827',
  },
  postButton: {
    backgroundColor: '#fef200',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  postButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
