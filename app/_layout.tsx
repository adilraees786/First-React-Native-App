import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


import { useColorScheme } from '@/hooks/useColorScheme';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';



// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const SCREEN_HEIGHT = Dimensions.get('screen').height;

export default function Bykea() {


  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <MaterialIcons name="menu" size={24} color="green" />
        <Text style={styles.title}>BYKEA</Text>
        <MaterialIcons name="add-call" size={24} color="green" />
      </View>
      {/* Banner image */}
      <View style={styles.Bannerimage}>
        <Image
          style={styles.bannerimg}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlehOF0EnLGJDTPc3TrBz93V25TIul_sNrQ&s"
          }}
        />
      </View>
      {/* info view */}
      <View style={styles.infoView}>
        <MaterialIcons name="attach-money" size={24} color="green" />
        <MaterialIcons name="message" size={24} color="green" />
      </View>

      <View style={styles.Buttomcontainer}>
        <View style={styles.row}>
          <View style={styles.card}></View>
          <View style={styles.card}></View>
        </View>
        <View style={styles.row}>
          <View style={styles.card}></View>
          <View style={styles.card}></View>
        </View>
        <View style={styles.row}>
          <View style={styles.card}></View>
          <View style={styles.card}></View>
        </View>

      </View>

    </View>
  );
}
 
const Card= ({bgcolor, icon, title}) => {
  return (
    <View style={styles.card}>
      <Text style={{textAlign: "right"}}> = {title}</Text>

    </View>
  )
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
    paddingHorizontal: 16,

  },
  title: {
    fontWeight: 'bold',
    letterSpacing: 3,
    fontSize: 21,
    color: "green"


  },
  Bannerimage: {
    height: SCREEN_HEIGHT / 3.7,
    backgroundColor: '#DEE3EB',
    paddingHorizontal: 20,
    paddingTop: 10,

  },
  bannerimg: {
    height: "86%",
    borderRadius: 12,

  },
  infoView: {
    height: 45,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
    borderRadius: 12,
    marginHorizontal: 20,
    marginTop: -15,

  },
  Buttomcontainer: {
    flex: 1,
    margin: 20,
    gap: 15,


  },
  row: {
    flex: 1,

    flexDirection: "row",
    gap: 15,

  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 12,
  }
});