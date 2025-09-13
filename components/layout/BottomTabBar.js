
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function BottomTabBar() {
  return (
    <View style={styles.container}>

      <Text style={styles.tabText}>Voice</Text>
      <Text style={styles.tabText}>Home</Text>
      <Text style={styles.tabText}>Scenes</Text>

    </View>
  );
}

export default BottomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#2d2d2d',
    // backgroundColor: '#444',
    padding: 20,
    justifyContent: 'space-around',
  },
  tabText: {
    color: '#ffffff',
    fontSize: 16,
  },
});