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
            activeOpacity={1}
          >
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{device.name}</Text>
              <Text style={styles.modalSubtitle}>{device.room}</Text>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={handleCloseModal}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
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
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  modalSubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#b0b0b0',
    marginBottom: 30,
  },
  closeButton: {
    backgroundColor: '#4ecdc4',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  closeButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  }

});
