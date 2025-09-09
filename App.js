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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1a1a1a',
//     padding: 20,
//     paddingTop: 60, // for status bar
//   },
//   title: {
//     fontSize: 24,
//     color: '#FFFFFF',
//     marginBottom: 30,
//   },
  
//   deviceCard: {
//     width: 180,
//     height: 170,
//     // backgroundColor: '#2d2d2d',
//     borderRadius: 8,
//     marginBottom: 10,
//     padding: 10,
//     // alignItems: 'center',
//   },
//   topSection: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     flex: 1,
//     marginBottom: 10,
//   },
//   deviceInfo: {
//     // flex: 1
//   },
//   deviceName: {
//     fontSize: 16,
//     color: '#ffffff',
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   deviceLocation: {
//     fontSize: 14,
//     color: '#b0b0b0',
//   },

//   // right side of top
//   toggleButton: {
//     width: 50,
//     height: 25,
//     borderRadius: 12.5,
//     justifyContent: 'center',
//     position: 'relative',
//     // backgroundColor: '#444',
//     // padding: 8,
//     // fontSize: 12,
//   },

//   // toggle off
//   toggleOff: {
//     backgroundColor: '#444'
//   },
//   // toggle on
//   toggleOn: {
//     backgroundColor: '#4CAF50',
//   },

//   // moving circle inside the toggle
//   toggleCircle: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     backgroundColor: '#ffffff',
//     position: 'absolute' // it makes the position of circle to change
//   },

//   circleOff: {
//     left: 3,
//   },
//   circleOn: {
//     right: 3,
//   },
  
//   // buttomSection:
//   bottomSection: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   deviceImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 8,
//   },
// });




    // <LinearGradient
    //       colors={['#4a4a4a', '#67613eff']}
    //       start={{ x: 0.7, y: 0.2}}
    //       end={{ x: 1, y: 0.3}}
    //       style={styles.deviceCard} >

    //        top section
    //       <View style={styles.topSection}>
    //         {/* left */}
    //         <View style={styles.deviceInfo}>
    //           <Text style={styles.deviceName}>Electric Kettle</Text>
    //           <Text style={styles.deviceLocation}>Kitchen</Text>
    //         </View>

    //         right
    //         <TouchableOpacity style={[
    //           styles.toggleButton,
    //           isDeviceOn ? styles.toggleOn : styles.toggleOff
    //         ]}
    //           onPress={handleToggle}
    //         >
    //           <View style={[styles.toggleCircle, 
    //             isDeviceOn ? styles.circleOn : styles.circleOff
    //           ]}
    //           >

    //           </View>
              
    //         </TouchableOpacity>
    //       </View>

    //       Bottom
    //       <View style={styles.bottomSection}>
    //         <Image
    //         source={ElectricKettle}
    //         style={styles.deviceImage}
    //         />
    //       </View>
    //     </LinearGradient>