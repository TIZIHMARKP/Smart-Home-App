import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import ElectricKettle from './assets/images/electricKettle.jpg'


export default function App() {

  return (

    <View style={styles.container}>
      <Text style={styles.title}>SMART HOME APP</Text>


      <View style={styles.deviceCard}>

        {/*  top section */}
        <View style={styles.topSection}>
          {/* left */}
          <View style={styles.deviceInfo}>
            <Text style={styles.deviceName}>Electric Kettle</Text>
            <Text style={styles.deviceLocation}>Kitchen</Text>
          </View>
          {/* right */}
          <View style={styles.toggleButton}>
            <Text style={styles.placeholderText}>Toggle</Text>
          </View>
        </View>

        {/* Bottom */}
        <View style={styles.bottomSection}>
          <Image
          source={ElectricKettle}
          style={styles.deviceImage}
          />
        </View>
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
    marginBottom: 30,
  },
  
  deviceCard: {
    width: 180,
    height: 170,
    backgroundColor: '#2d2d2d',
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
    // alignItems: 'center',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginBottom: 10,
  },
  deviceInfo: {
    // flex: 1
  },
  deviceName: {
    display: 'flex',
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  deviceLocation: {
    fontSize: 14,
    color: '#b0b0b0',
  },

  // right side of top
  toggleButton: {
    backgroundColor: '#444',
    padding: 8,
    fontSize: 12,
  },

  placeholderText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  
  // buttomSection:
  bottomSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  deviceImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    // marginBottom:
  },
});
