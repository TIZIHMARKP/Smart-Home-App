// import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from "./navigation/TabNavigator";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1a1a1a"
        translucent={false}
      />
      <NavigationContainer>
        <View style={styles.container}>
          {/* <Text style={styles.title}>SMART HOME APP</Text> */}

          <TabNavigator />
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    // padding: 20,
  },
   
});
