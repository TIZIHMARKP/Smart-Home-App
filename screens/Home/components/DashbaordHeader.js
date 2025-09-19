import React, { useState } from "react";
import { Modal } from "react-native";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function DashboardHeader() {
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddPress = () => {
    setShowAddModal(true);
    console.log("+ button pressed - showing modal: ");
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
    console.log("Add modal closed");
  };

  const handleGreetingPress = () => {
    console.log("Greeting Pressed");
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={handleGreetingPress}>
            <Text style={styles.greeting}>Good Morning</Text>
            <Text style={styles.subtitle}>Royal</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addButton} onPress={handleAddPress}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>SMART HOME APP</Text>
      </View>

      <Modal
        visible={showAddModal}
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

              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Add New Device</Text>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={handleCloseModal}
                >
                  <Text style={styles.closeButtonText}>X</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.modalBody}>
                <Text style={styles.placeHolderText}>Select Device</Text>
              </View>

            </View>

          </TouchableOpacity>

        </View>
      </Modal>
    </>
  );
}

export default DashboardHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a1a1a",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
    marginTop: 2,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  greeting: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 14,
    color: "#b0b0b0",
    marginTop: 2,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    // backgroundColor: '#4ecdca',
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
  },


  modalOverlay: {
    flex: 1,
    // height: 80,
    // width: 80,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    // flex: 5,
    backgroundColor: '#2d2d2d',
    borderRadius: 20,
    padding: 0,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff'
  },
   closeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#444',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalBody: {
    padding: 20,
    minHeight: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeHolderText: {
    color: '#b0b0b0',
    fontSize: 16,
  },

});
