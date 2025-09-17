import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'


import DeviceCard from '../../components/device/DeviceCard'


import ElectricKettle from '../../assets/images/electricKettle.jpg'
import coffeeMachine from '../../assets/images/coffeeMachine.jpg'
import powerSocket from '../../assets/images/powerSocket.jpg'
import riceCokker from '../../assets/images/RiceCokker.jpg'
import SmartStation from '../../assets/images/SmartStation.jpg'
import washingMachine from '../../assets/images/washingMachine.jpg'
import ElectricFan from '../../assets/images/fan.jpg'
import bulb from '../../assets/images/bulb.jpg'
import RoomFilter from './components/RoomFilter'
import DashboardHeader from './components/DashbaordHeader'


function DashboarScreen() {

  const [currentRoom, setCurrentRoom] = useState('All');

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
      room: 'Laundry Room',
      image: washingMachine,
      type: "basic" // on/off 
    },
    {
      id: 5,
      name: 'Power Socket',
      room: 'Bedroom',
      image: powerSocket,
      type: "basic" //  on/off
    },
    {
      id: 6,
      name: 'Smart Station',
      room: 'Kids Room',
      image: SmartStation,
      type: "basic" // on/off
    },
    {
      id: 7,
      name: 'White bulb',
      room: 'Living Room',
      image: bulb,
      type: "basic" // on/off
    },
    {
      id: 8,
      name: 'Electric fan',
      room: 'Living Room',
      image: ElectricFan,
      type: "basic" // on/off
    },
  ];

  const getFilteredDevices = () => {
    if(currentRoom === 'All'){
      return devices;
    }

    return devices.filter(device => device.room === currentRoom);
  }

  const handleRoomChange = (selectedRoom) => {
    setCurrentRoom(selectedRoom);
    // console.log('DashboardScreen: Room changed to ', selectedRoom)
  }



  return (
    <View style={styles.container}>
      <DashboardHeader /> 
      <RoomFilter  onRoomChange={handleRoomChange}/>

      <FlatList
        data={getFilteredDevices()}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DeviceCard device={item} />
        )}
        contentContainerStyle={styles.gridContainer}
        columnWrapperStyle={styles.row}   // Style for each row
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default DashboarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    // paddingHorizontal: 16,
    paddingTop: 60,
  },
  gridContainer: {
    // flex: 1,
    paddingBottom: 20,
    // margin: 12
    // padding: 10
  },
  row: {
    justifyContent: 'center',
    // paddingHorizontal: 8,
    marginBottom: 10

  }

});
