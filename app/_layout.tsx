import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


import { useColorScheme } from '@/hooks/useColorScheme';
import { View, Text, StyleSheet , Dimensions} from 'react-native';



// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const SCREEN_HEIGHT = Dimensions.get('screen').height;

export default function Bykea() {
  

  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <MaterialIcons name="menu" size={24} color="black" />
        <Text style={styles.title}>BYKEA</Text>
        <MaterialIcons name="add-call" size={24} color="black" />
      </View>
{/* Banner image */}
<View style={styles.Bannerimage}>

</View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    borderBlockColor: '#CCC',
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,

  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '',
    marginHorizontal: 10,

  },
  Bannerimage: {
    height: SCREEN_HEIGHT / 4,
    backgroundColor: '#DEE3EB',
   
  
  }
});