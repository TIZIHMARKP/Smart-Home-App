import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import ElectricKettle from '../../assets/images/electricKettle.jpg'
import coffeeMachine from '../../assets/images/coffeeMachine.jpg'
import powerSocket from '../../assets/images/powerSocket.jpg'
import riceCokker from '../../assets/images/RiceCokker.jpg'
import SmartStation from '../../assets/images/SmartStation.jpg'
import washingMachine from '../../assets/images/washingMachine.jpg'
import DeviceCard from '../../components/device/DeviceCard'


function DashboarScreen() {
  const devices = [
    {
      id: 1,
      name: "Electric Kettle",
      status: "off",
      temperature: 25,
      room: "Kitchen",
      image: ElectricKettle,
    },
    {
        id: 2,
        name: "Coffee machine",
        status: "off",
        temperature: 25,
        room: 'Kitchen',
        image: coffeeMachine
    },
    {
        id: 3,
        name: "Rice cooker",
        status: 'off',
        temperature: 25,
        room: 'Kitchen',
        image: riceCokker
    },
    {
        id: 4,
        name: 'Washing machine',
        status: 'off',
        temperature: 25,
        room: 'Loundry',
        image: washingMachine 
    },
    {
        id: 5,
        name: 'Power Socket',
        status: 'off',
        temperature: 25,
        room: 'Living room',
        image: powerSocket
    },
    {
        id: 6,
        name: 'Smart Station',
        status: 'off',
        temperature: 25,
        room: 'Kids room',
        image: SmartStation
    }

  ];


  return(
    <View style={styles.container}>
        <DeviceCard />
    </View>
  )
}

export default DashboarScreen;

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
    // flex: 1
  },
  deviceName: {
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
