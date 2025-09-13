import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";



function RoomFilter() {
    const rooms = [
        'All',
        'Living Room',
        'Kitchen',
        'Bedroom',
        'Bathroom',
        'Laundry Room',
        'Kids Room'
    ];

    const [activeRoom, setActiveRoom] = useState('All');

    const handleRoomPress = (room) => {
        setActiveRoom(room);
        console.log('Selected room: ', room);
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonRow}>

            {rooms.map((room) => (
                <TouchableOpacity
                    key={room}
                    style={[
                        styles.filterButton,
                        activeRoom === room ? styles.activeButton : styles.inactiveButton
                    ]}
                    onPress={() => handleRoomPress(room)}
                >
                <Text style={[
                    styles.buttonText,
                    activeRoom === room ? styles.activeText : styles.inactiveText
                    ]}>
                        {room}
                    </Text>

                </TouchableOpacity>

            ))}
            </View>

        </View>
    );

}


export default RoomFilter;

const styles = StyleSheet.create({
    container: {
        padddingVertical: 16,
        paddingHorizontal: 10,
        backgroundColor: '#1a1a1a',
        marginBottom: 20
        // margin: 10
        // backgroundColor: 'red',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // alignItems: 'center',
    },
    filterButton:{
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        marginHorizontal: 2,
        // backgroundColor: 'red',
    },
    buttonText: {
        color: '#ffffff',
        fontsize: 17,
        fontWeight: '800',
        marginBottom: 6,
        // marginRight: 8
        // alignItems: 's
    },
    activeButton:{
        backgroundColor: '#323724ff'
    },
    inactiveButton:{
        backgroundColor: '#444',
    },
    activeText: {
        color: '#ffffff'
    },
    inactiveText:{
        color: '#b0b0b0'
    }

});