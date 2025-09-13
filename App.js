import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import ElectricKettle from './assets/images/electricKettle.jpg'
import DashboarScreen from './screens/Home/DashboardScreen';
import BottomTabBar from './components/layout/BottomTabBar';
import ScenesScreen from './screens/Scenes/ScenesScreen';
import VoiceScreen from './screens/Voice/VoiceScreen';


export default function App() {

  return (

    <View style={{ flex: 1}}>
    <View style={styles.container}>
      <Text style={styles.title}>SMART HOME APP</Text>

      <VoiceScreen />
      <DashboarScreen />
      <ScenesScreen />
    </View>
      <BottomTabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 30,
  },
});
