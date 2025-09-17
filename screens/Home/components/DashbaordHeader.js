import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


function DashboardHeader(){
    const handleAddPress = () => {
        console.log('add pressed');
    }

    const handleGreetingPress = () => {
        console.log('Greeting Pressed');
    }

    return(
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
    )
}

export default DashboardHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1a1a1a',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 15,
        marginTop: 2
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        // marginTop: 10
    },
    greeting: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: '600',
    },
    subtitle: {
        fontSize: 14,
        color: '#b0b0b0',
        marginTop: 2,
    },
    addButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        // backgroundColor: '#4ecdca',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 24,
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold'
    }


})
