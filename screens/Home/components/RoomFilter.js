import { StyleSheet, Text, View } from "react-native";



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

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Room Filter</Text>
            {rooms.map((room, index) => (
                <Text style={styles.roomText}>{room}</Text>
            ))}
        </View>
    );

}


export default RoomFilter;

const styles = StyleSheet.create({
    container: {
      paddding: 16,
    backgroundColor: '#1a1a1a',
    },
    title:{
        color: '#ffffff',
        fontsize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    roomText: {
        color: '#ffffff',
        fontsize: 14,
        marginBottom: 6,
    }

});