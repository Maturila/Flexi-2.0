import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import SplashScreenComponent from '../components/SplashScreen';
import { useColorScheme } from '../hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return <SplashScreenComponent />;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerRight: () => (
              <>
                {/* Profile Button */}
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  onPress={() => console.log('Navigate to Profile')}>
                  <FontAwesome name="user-circle" size={30} color="#175d73" />
                </TouchableOpacity>

                {/* Employer Button */}
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  onPress={() => console.log('Navigate to Employer')}>
                  <FontAwesome name="building" size={30} color="#175d73" />
                </TouchableOpacity>
              </>
            ),
          }}
        />
        
        <Stack.Screen name="(auth)" />
        <TouchableOpacity 
          style={{ position: 'absolute', top: 10, right: 50 }} 
          onPress={() => navigation.navigate('(tabs)/employer')}
        >
          <FontAwesome name="building" size={30} color="#175d73" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={{ position: 'absolute', top: 10, right: 50 }} 
          onPress={() => navigation.navigate('(tabs)/employer')}
        >
          <FontAwesome name="building" size={30} color="#175d73" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={{ position: 'absolute', top: 10, right: 50 }} 
          onPress={() => navigation.navigate('(tabs)/employer')}
        >
          <FontAwesome name="building" size={30} color="#175d73" />
        </TouchableOpacity>
        <Stack.Screen name="welcome" />
        <Stack.Screen name="+not-found" options={{ headerShown: true }} />
      </Stack>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </ThemeProvider>
  );
}

// Redirect to the auth screen if the user hasn't authenticated
export const unstable_settings = {
  initialRouteName: '(auth)',
};
