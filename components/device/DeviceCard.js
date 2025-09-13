import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';

import ElectricKettle from '../../assets/images/electricKettle.jpg'



function DeviceCard(props){

    // const device = {
    //     id: 1,
    //     name: "Electric Kettle",
    //     room: "Kitchen",
    //     image: ElectricKettle,
    // }

    const device = props.device;

    const [isDeviceOn, setIsDeviceOn] = useState(false);

    const handleToggle = () => {
        setIsDeviceOn(!isDeviceOn);
        console.log(device.name + ' is now: ', !isDeviceOn ? 'ON' : 'Off');

    }

    return(
         <LinearGradient
      colors={['#4a4a4a', '#67613eff']}  
      start={{ x: 0, y: 0.2 }}
      end={{ x: 1, y: 0.3 }}
      style={styles.deviceCard}
    >
      {/* Top section */}
      <View style={styles.topSection}>
        {/* Left side */}
        <View style={styles.deviceInfo}>
          <Text style={styles.deviceName}>{device.name}</Text>
          <Text style={styles.deviceLocation}>{device.room}</Text>
        </View>

        {/* Right side */}
        <TouchableOpacity
          style={[
            styles.toggleButton,
            isDeviceOn ? styles.toggleOn : styles.toggleOff
          ]}
          onPress={handleToggle}
        >
          <View style={[
            styles.toggleCircle, 
            isDeviceOn ? styles.circleOn : styles.circleOff
          ]} />
        </TouchableOpacity>
      </View>

      {/* Bottom section */}
      <View style={styles.bottomSection}>
        <Image
          source={device.image}
          style={styles.deviceImage}
        />
      </View>
    </LinearGradient>
    )
}

export default DeviceCard;


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
    flex: 1,
    maxWidth: 180,
    height: 170,
    marginHorizontal: 8,
    // backgroundColor: '#2d2d2d',
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
    flex: 1
  },
  deviceName: {
    flexWrap: 'wrap',
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
    width: 50,
    height: 25,
    borderRadius: 12.5,
    justifyContent: 'center',
    position: 'relative',
    // backgroundColor: '#444',
    // padding: 8,
    // fontSize: 12,
  },

  // toggle off
  toggleOff: {
    backgroundColor: '#444'
  },
  // toggle on
  toggleOn: {
    backgroundColor: '#4CAF50',
  },

  // moving circle inside the toggle
  toggleCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    position: 'absolute' // it makes the position of circle to change
  },

  circleOff: {
    left: 3,
  },
  circleOn: {
    right: 3,
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
  },
});


