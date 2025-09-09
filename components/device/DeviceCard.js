import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function DeviceCard(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Device Card </Text>
        </View>
    )
}

export default DeviceCard;

const styles =  StyleSheet.create({
    container: {
    padding: 20,
    backgroundColor: '#2d2d2d',
    borderRadius: 8,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
  },
})