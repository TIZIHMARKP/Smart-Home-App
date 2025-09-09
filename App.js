import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import ElectricKettle from './assets/images/electricKettle.jpg'
import DashboarScreen from './screens/Home/DashboardScreen';


export default function App() {

  const [isDeviceOn, setIsDeviceOn ] = useState(false);

  const handleToggle = () => {
    setIsDeviceOn(!isDeviceOn) // flipx state to opposite
    console.log('Device is now: ', !isDeviceOn ? 'On' : 'Off');
  };

  return (

    <View style={styles.container}>
      <Text style={styles.title}>SMART HOME APP</Text>

      <DashboarScreen /> 
        
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
