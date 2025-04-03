import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, Image, Text, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    gender: '',
    dob: '',
    password: '',
    confirmPassword: '',
  });

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSignup = async () => {
    try {
      const response = await fetch('http://192.168.56.1:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('✅ Signup successful:', data.message);
        // You can navigate to login screen here if needed
      } else {
        console.error('❌ Signup error:', data.error);
      }
    } catch (error) {
      console.error('❌ Error during signup:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image 
            source={require('../../assets/images/Login-Signup Image.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.titleText}>Flexi Connect</Text>
          <Text style={styles.subtitleText}>Find or offer quick gigs instantly!</Text>
        </View>

        <View style={styles.form}>
          {[
            { placeholder: 'Name', key: 'name' },
            { placeholder: 'Phone', key: 'phone', keyboardType: 'phone-pad' },
            { placeholder: 'Email', key: 'email', keyboardType: 'email-address' },
            { placeholder: 'Address', key: 'address' },
            { placeholder: 'Gender', key: 'gender' },
            { placeholder: 'Date of Birth (DD/MM/YYYY)', key: 'dob' },
            { placeholder: 'Password', key: 'password', secure: true },
            { placeholder: 'Confirm Password', key: 'confirmPassword', secure: true },
          ].map(({ placeholder, key, keyboardType, secure }) => (
            <View style={styles.inputContainer} key={key}>
              <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={formData[key]}
                onChangeText={(value) => updateField(key, value)}
                placeholderTextColor="#666"
                keyboardType={keyboardType || 'default'}
                secureTextEntry={secure}
              />
            </View>
          ))}

          <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
            <Text style={styles.signupButtonText}>Get Started</Text>
          </TouchableOpacity>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <Link href="../login" asChild>
              <TouchableOpacity>
                <Text style={styles.loginLink}>Login</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  header: {
    backgroundColor: '#eef92d',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 30,
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
  },
  logo: {
    width: 126,
    height: 126,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    lineHeight: 29,
  },
  form: {
    padding: 20,
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    padding: 15,
    fontSize: 16,
    color: '#000',
  },
  signupButton: {
    backgroundColor: '#175d73',
    borderRadius: 15,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    fontSize: 16,
    color: '#000',
  },
  loginLink: {
    color: '#175d73',
    fontSize: 16,
    fontWeight: '600',
  },
});
