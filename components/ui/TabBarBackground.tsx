// This is a shim for web and Android where the tab bar is generally opaque.
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabBarBackground() {
  const { bottom } = useSafeAreaInsets();
  
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { 
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          paddingBottom: Platform.OS === 'android' ? bottom : 0
        }
      ]}
    />
  );
}

export function useBottomTabOverflow() {
  const tabHeight = useBottomTabBarHeight();
  const { bottom } = useSafeAreaInsets();
  return Platform.OS === 'android' ? tabHeight : tabHeight - bottom;
}
