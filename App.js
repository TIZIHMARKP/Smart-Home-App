import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import ElectricKettle from './assets/images/electricKettle.jpg'


export default function App() {

  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>SMART HOME APP</Text>
      <View style={styles.deviceCard}>
        <Image
          source={ElectricKettle}
          style={styles.deviceImage}
        />
        <Text style={styles.deviceName}>Electric Kettle</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 20,
    paddingTop: 60, // for status bar
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    // marginBottom: 
  },
  deviceCard: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    // backgroundColor: '#5b0707ff'
  },
  deviceImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    // marginBottom:
  },
  deviceName: {
    fontSize: 16,
    color: '#FFFFFF',
  }
});
