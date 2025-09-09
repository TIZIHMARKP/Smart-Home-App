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
    room: "Kitchen",
    image: ElectricKettle,
    type: "temperature", // temp display is present 4 kettle, so would thing about it 
    temperature: 25,     // todo
  },
  {
    id: 2,
    name: "Coffee machine",
    room: 'Kitchen',
    image: coffeeMachine,
    type: "temperature",
    temperature: 25,
  },
  {
    id: 3,
    name: "Rice cooker",
    room: 'Kitchen',
    image: riceCokker,
    type: "temperature",
    temperature: 25,
  },
  {
    id: 4,
    name: 'Washing machine',
    room: 'Laundry room', 
    image: washingMachine,
    type: "basic" // on/off 
  },
  {
    id: 5,
    name: 'Power Socket',
    room: 'Living room',
    image: powerSocket,
    type: "basic" //  on/off
  },
  {
    id: 6,
    name: 'Smart Station',
    room: 'Kids room',
    image: SmartStation,
    type: "basic" // on/off
  }
];



  return(
    <View style={styles.container}>

        {devices.map((device) => (
            <DeviceCard
            key = {devices.id}
            device = {device}
        />
        ))}

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
