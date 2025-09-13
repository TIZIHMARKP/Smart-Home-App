import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ScenesScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>Scenes Screen</Text>

    </View>
  );
}

export default ScenesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 18,
  },
});