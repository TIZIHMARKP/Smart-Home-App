import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";

import ElectricKettle from "../../assets/images/electricKettle.jpg";

function DeviceCard(props) {
  const device = props.device;

  const [isDeviceOn, setIsDeviceOn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => {
    setIsDeviceOn(!isDeviceOn);
    console.log(device.name + " is now: ", !isDeviceOn ? "ON" : "Off");
  };

  const handleLongPress = () => {
    setShowModal(true);
    console.log("Long press detected - showing modal for: ", device.name);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    console.log("Modal closed");
  };

  return (
    <>
      <LinearGradient
        colors={["#4a4a4a", "#67613eff"]}
        start={{ x: 0, y: 0.2 }}
        end={{ x: 1, y: 0.3 }}
        style={styles.deviceCard}
      >
        <TouchableOpacity
          style={styles.cardPressable}
          onLongPress={handleLongPress}
          activeOpacity={0.8}
        >
          {/* Top section */}
          <View style={styles.topSection}>
            {/* Left side */}
            <View style={styles.deviceInfo}>
              <Text style={styles.deviceName}>{device.name}</Text>
              <Text style={styles.deviceLocation}>{device.room}</Text>
            </View>

            {/* Right side */}
            <TouchableOpacity
              style={[
                styles.toggleButton,
                isDeviceOn ? styles.toggleOn : styles.toggleOff,
              ]}
              onPress={handleToggle}
            >
              <View
                style={[
                  styles.toggleCircle,
                  isDeviceOn ? styles.circleOn : styles.circleOff,
                ]}
              />
            </TouchableOpacity>
          </View>

          {/* Bottom section */}
          <View style={styles.bottomSection}>
            <Image source={device.image} style={styles.deviceImage} />
          </View>
        </TouchableOpacity>
      </LinearGradient>

      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity
            style={styles.modalBackground}
            onPress={handleCloseModal}
            // activeOpacity={1}
          >
            <View style={styles.modalContent}>

              {/* =========  TOP ======== */}
              <View style={styles.modalTopSection}>

                <View style={styles.modalDeviceInfo}>
                  <Text style={styles.modalDeviceName}>{device.name}</Text>
                  <Text style={styles.modalDeviceLocation}>{device.room}</Text>
                </View>

                <TouchableOpacity
                  style={[
                    styles.modalToggleButton,
                    isDeviceOn ? styles.modalToggleOn : styles.modalToggleOff
                  ]}
                  onPress={handleToggle}
                >
                  <View style={[
                    styles.modalToggleCircle,
                    isDeviceOn ? styles.modalCircleOn : styles.modalCircleOff
                  ]} />
                </TouchableOpacity>
              </View>


              {/* ======== MIDDLE ========= */}
              <View style={styles.modalMiddleSection}>
                <Text style={styles.sectionTitle}>Settings</Text>

                <View style={styles.settingsRow}>
                  <Text style={styles.settingLabel}>temperature</Text>
                  <Text style={styles.settingValue}>25°C</Text>
                </View>
                <View style={styles.settingsRow}>
                  <Text style={styles.settingLabel}>Timer</Text>
                  <Text style={styles.settingValue}>Off</Text>
                </View>
              </View>

              {/* ======= BOTTOM ========= */}
              <View style={styles.modalBottomSection}>

                <TouchableOpacity style={styles.actionCard}>
                  <Text style={styles.actionIcon}>⏰</Text>
                  <Text style={styles.actionText}>Timer</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.actionCard}>
                  <Text style={styles.actionIcon}>🌡️</Text>
                  <Text style={styles.actionText}>Temp</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.actionCard}>
                  <Text style={styles.actionIcon}>⚙️</Text>
                  <Text style={styles.actionText}>Settings</Text>
                </TouchableOpacity>
              </View>

               
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
}

export default DeviceCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    padding: 20,
    paddingTop: 60, // for status bar
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
    marginBottom: 30,
  },

  deviceCard: {
    flex: 1,
    maxWidth: 180,
    height: 170,
    marginHorizontal: 8,
    // backgroundColor: '#2d2d2d',
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
    // alignItems: 'center',
  },

  cardPressable: {
    flex: 1,
    padding: 5,
  },

  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    marginBottom: 10,
  },
  deviceInfo: {
    flex: 1,
  },
  deviceName: {
    flexWrap: "wrap",
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
    marginBottom: 4,
  },
  deviceLocation: {
    fontSize: 14,
    color: "#b0b0b0",
  },

  // right side of top
  toggleButton: {
    width: 50,
    height: 25,
    borderRadius: 12.5,
    justifyContent: "center",
    position: "relative",
    // backgroundColor: '#444',
    // padding: 8,
    // fontSize: 12,
  },
  // toggle off
  toggleOff: {
    backgroundColor: "#444",
  },
  // toggle on
  toggleOn: {
    backgroundColor: "#4CAF50",
  },

  // moving circle inside the toggle
  toggleCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    position: "absolute",
  },

  circleOff: {
    left: 3,
  },
  circleOn: {
    right: 3,
  },
  bottomSection: {
    alignItems: "center",
    justifyContent: "center",
  },
  deviceImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalBackground:{
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#2d2d2d',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: 450,
    alignItems: 'stretch',
  },
  // ========= TOP
  modalTopSection:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBlockColor: '#444'
  },
  modalDeviceInfo: {
    flex: 1,
  },
  modalDeviceName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  modalDeviceLocation: {
    fontSize: 16,
    color: '#B0B0B0',
  },
  modalToggleButton:{
    width: 60,
    height: 30,
    // backgroundColor: 'red',
    borderRadius: 15,
    justifyContent: 'center',
    position: 'relative',
  },
  modalToggleOn: {
    backgroundColor: '#4caf50'
  },
  modalToggleOff:{
    backgroundColor: '#444',
  },
  modalToggleCircle:{
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    position: 'absolute'

  },
  modalCircleOff: {
    left: 3,
  },
  modalCircleOn: {
    right: 3,
  },

  // =========== MIDDLE
  modalMiddleSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  settingsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  settingLabel: {
    fontSize: 16,
    color: '#b0b0b0',
  },
  settingValue: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '500',
  },

  // ========== BOTTOM
   modalBottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto', // Pushx to bottom
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#444',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  actionIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  actionText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '500',
  },



  
   

});
