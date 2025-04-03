import React, { useState } from 'react';
import { Alert } from 'react-native';
import { View, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, Image, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Login() {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobileNumber: Email, password }), // Corrected here
      });

      const data = await response.json();
      if (response.ok) {
        // Handle successful login (e.g., navigate to home or show success message)
        console.log('Login successful:', data.message);
      } else {
        // Handle errors (e.g., show error message)
        Alert.alert('Login Error', data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Login Error', 'An error occurred. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={Email}
            onChangeText={setEmail}
            placeholderTextColor="#666"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#666"
          />
        </View>

        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <Link href="../signup" asChild>
            <TouchableOpacity>
              <Text style={styles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    padding: 15,
    fontSize: 16,
    color: '#000',
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: '#175d73',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#175d73',
    borderRadius: 15,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontSize: 16,
    color: '#000',
  },
  signupLink: {
    color: '#175d73',
    fontSize: 16,
    fontWeight: '600',
  },
});
