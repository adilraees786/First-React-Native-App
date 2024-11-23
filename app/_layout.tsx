import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


import { useColorScheme } from '@/hooks/useColorScheme';
import { View , Text, StyleSheet} from 'react-native';



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
    <View  style={styles.container} >
<View style={styles.header}>
<MaterialIcons name="menu" size={24} color="black" />
<MaterialIcons name="add-call" size={24} color="black" />
</View>


    </View>
  );
}

const styles = StyleSheet.create({
  container:{
   flex:1,
  },
  header:{
    height: 50,
    borderBlockColor:'#CCC',
    borderBottomWidth: 1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  


  }
  
});