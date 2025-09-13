
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function BottomTabBar() {

    const [activeTab, setActiveTab ] = useState('Home');

    const handleTabPress = (tabName) => {
        setActiveTab(tabName);
        console.log('Tab pressed: ', tabName);
    };




  return (
    <View style={styles.container}>

        <TouchableOpacity
            style={styles.tabItem}
            onPress={() => handleTabPress('Voice')}
        >
            <View style={styles.tabIcon}>
                <Text style={[
                    styles.iconText,
                ]}>
                    🎤
                </Text>
            </View>
            <Text style={[
                styles.tabLabel,
                activeTab === 'Voice' ? styles.activeLabel : styles.inactiveLabel
            ]}
            >
                Voice
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.tabItem}
            onPress={() => handleTabPress('Home')}
        >
            <View style={styles.tabIcon}>
                <Text style={[
                    styles.iconText,
                ]}>
                    🏠
                </Text>
            </View>
            <Text style={[
                styles.tabLabel,
                activeTab === 'Home' ? styles.activeLabel : styles.inactiveLabel

            ]}
            >
                Home
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.tabItem}
            onPress={() => handleTabPress('Scenes')}
        >
            <View style={styles.tabIcon}>
                <Text style={[
                    styles.iconText,
                ]}>
                    ✏️
                </Text>
            </View>
            <Text style={[
                styles.tabLabel,
                activeTab === 'Scenes' ? styles.activeLabel : styles.inactiveLabel

            ]}>
                Scenes
            </Text>
        </TouchableOpacity>
       

    </View>
  );
}

export default BottomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#2d2d2d',
    // backgroundColor: '#444',
    // padding: 20,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#444',

    justifyContent: 'space-around',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabIcon: {
    marginBottom: 4,
  },
  iconText:{
    fontSize: 20,
  },
  activeIcon:{
    opacity: 1,
  },
  inactiveIcon: {
    opacity: 0.5,
  },
  tabLabel: {
    // color: '#fff',
    fontSize: 12,
    fontWeight: 500,
  },
  activeLabel: {
    color: '#4ecdc4',
  },
  inactiveLabel: {
    color: '#b0b0b0',
  },


});