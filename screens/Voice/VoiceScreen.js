import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function VoiceScreen() {

  const [isListening, setIsListening] = useState(false);
  const [voiceResult, setVoiceResult] = useState('');

  const handleVoicePress = () => {
    if(!isListening){
      setIsListening(true);
      setVoiceResult('');
      console.log("Started listening...");

      setTimeout(() => {
        setVoiceResult('Turn on Air conditioner');
        setIsListening(false);
        console.log('Voice recognition completed');
      }, 3000);

    }else{
      setIsListening(false);
      console.log('Stopped listening');
    }
  };

  return (
    <View style={styles.container}>
       
      <View style={styles.topSection}>
        {voiceResult ? (
          <Text style={styles.voiceResultText}>{voiceResult}</Text>
        ): (
          <Text style={styles.statusText}>
            {isListening ? ' Listening...' : 'Ready to listen'}
          </Text>
        )}
      </View>
      
       
      <View style={styles.middleSection}>
        {/* <View style={styles.middleText}>
          <Text>Turn on</Text>
          <Text>Air conditioner</Text>
        </View> */}

        <TouchableOpacity
          style={[
            styles.voiceFace,
            isListening ? styles.voiceFaceActive : styles.voiceFaceInactive
          ]}
          onPress={handleVoicePress}
        >
            <Text style={styles.faceText}>
              {isListening ? '🎤' : '😊'}
            </Text>
        </TouchableOpacity>
      </View>
      
       
      <View style={styles.bottomSection}>
        <Text style={styles.instructionText}>
          {isListening ? 'Listening... Tap to stop' : 'Tap to speak'}
        </Text>

        <View style={styles.controlButtons}>

          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlButtonText}>✕</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlButtonText}>↻</Text>
          </TouchableOpacity>
          
        </View>

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
  voiceResultText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
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
  voiceFaceActive: {
    backgroundColor: '#4ecdc4'
  },
  voiceFaceInactive: {
    backgroundColor: '#2d2d2d'
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

  controlButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 120,
    margin: 10
  },
  controlButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#444',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },

});
