import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';


import { useColorScheme } from '@/hooks/useColorScheme';
import { View , Text} from 'react-native';



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
    return null;
  }

  return (
    <View style={{flex: 1, backgroundColor:"red", justifyContent:"center"}} >
     
      <View style={{flex: 1, backgroundColor: "black" }}/>
      <View style={{flex: 1, backgroundColor: "orange" }}/>
      <View style={{flex: 1, backgroundColor: "green" }}/>
      <View style={{flex: 1, backgroundColor: "yellow" }}/>

      
    </View>
  );
}

<style>

</style>