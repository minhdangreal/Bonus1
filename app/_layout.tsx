import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform, StatusBar } from 'react-native';

export default function Layout() {
  return (
    <SafeAreaView style={{ 
      flex: 1, 
      backgroundColor: '#ffffff',
      paddingTop: Platform.OS === 'android' ? 0 : undefined 
    }}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="screens/LoginScreen" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}
