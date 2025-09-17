
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DashboarScreen from "../screens/Home/DashboardScreen";
import VoiceScreen from "../screens/Voice/VoiceScreen";
import ScenesScreen from "../screens/Scenes/ScenesScreen";

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Voice" component={VoiceScreen} />
            <Tab.Screen name="Home" component={DashboarScreen} />
            <Tab.Screen name="Scenes" component={ScenesScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigator;