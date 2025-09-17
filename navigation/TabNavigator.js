
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DashboarScreen from "../screens/Home/DashboardScreen";
import VoiceScreen from "../screens/Voice/VoiceScreen";
import ScenesScreen from "../screens/Scenes/ScenesScreen";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle:{
                    backgroundColor: '#2d2d2d',
                    borderTopColor: '#444',
                    borderTopWidth: 1,
                    paddingTop: 8,
                    paddingBottom: 20,
                    height: 80,
                },
                tabBarActiveTintColor: '#4ecdc4',
                tabBarInactiveTintColor: '#b0b0b0',
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500'
                },
            }}
        >
            <Tab.Screen 
                name="Voice" 
                component={VoiceScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Text style={{
                            fontSize: 24,
                            paddingBottom: 5,
                            // color: '#fff',
                            opacity: focused ? 1 : 0.5
                        }}>
                            🎤
                        </Text>
                    )
                }}
            />

            <Tab.Screen
                name="Home" 
                component={DashboarScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Text style={{
                            fontSize: 24,
                            paddingBottom: 5,
                            // color: '#fff',
                            opacity: focused ? 1 : 0.5
                        }}>
                            🏚️
                        </Text>
                    )
                }}
            />
            <Tab.Screen 
                name="Scenes" 
                component={ScenesScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Text style={{
                            fontSize: 24,
                            paddingBottom: 5,
                            // color: '#fff',
                            opacity: focused ? 1 : 0.5
                        }}>
                            ✏️
                        </Text>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator;