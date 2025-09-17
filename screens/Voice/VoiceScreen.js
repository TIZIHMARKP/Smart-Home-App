import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function VoiceScreen() {
  return (
    <View style={styles.container}>
       
      <View style={styles.topSection}>
        <Text style={styles.statusText}>• Listening...</Text>
      </View>
      
       
      <View style={styles.middleSection}>
        {/* <View style={styles.middleText}>
          <Text>Turn on</Text>
          <Text>Air conditioner</Text>
        </View> */}

        <View style={styles.voiceFace}>
          <Text style={styles.faceText}>😊</Text>
        </View>
      </View>
      
       
      <View style={styles.bottomSection}>
        <Text style={styles.instructionText}>Tap to speak</Text>
      </View>
    </View>
  );
}

export default VoiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  statusText: {
    // color: '#4ECDC4',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  middleSection: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  // middleText: {
  //   margin: 10,
  //   color: "#fff"
  // },
  voiceFace: {
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#2d2d2d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  faceText: {
    marginTop: -25,
    fontSize: 250,
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
  instructionText: {
    color: '#B0B0B0',
    fontSize: 14,
  },
});