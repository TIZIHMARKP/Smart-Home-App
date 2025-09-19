import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

function ScenesScreen() {
  
  const scenes = [
    {
      id: 1,
      name: 'Good Morning',
      description: 'Turn on kettle, coffee machine',
      icon: '☀️',
      devicesCount: 3,
    },
    {
      id: 2,
      name: 'Movie Time',
      description: 'Dim lights, turn off kitchen devices',
      icon: '🎬',
      devicesCount: 2,
    },
    {
      id: 3,
      name: 'Sleep Mode',
      description: 'Turn off all devices',
      icon: '🌙',
      devicesCount: 6,
    },
    {
      id: 4,
      name: 'Cooking Time',
      description: 'Kitchen devices ready',
      icon: '👨‍🍳',
      devicesCount: 4,
    },
     
  ];

  const handleScenePress = (scene) => {
    console.log('Scene activated:', scene.name);
  };

  const renderScene = ({ item }) => (
    <TouchableOpacity 
      style={styles.sceneCard}
      onPress={() => handleScenePress(item)}
    >
      <View style={styles.sceneIcon}>
        <Text style={styles.iconText}>{item.icon}</Text>
      </View>
      
      <View style={styles.sceneInfo}>
        <Text style={styles.sceneName}>{item.name}</Text>

        <Text style={styles.sceneDescription}>{item.description}</Text>
        
        <Text style={styles.devicesCount}>{item.devicesCount} devices</Text>
      </View>
      
      <View style={styles.playButton}>
        <Text style={styles.playButtonText}>▶</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Scenes</Text>
        <Text style={styles.subtitle}>Automate your smart home</Text>
      </View>
      
      <FlatList
        data={scenes}
        renderItem={renderScene}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

export default ScenesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#B0B0B0',
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  sceneCard: {
    flexDirection: 'row',
    backgroundColor: '#2d2d2d',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
  },
  sceneIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4ECDC4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconText: {
    fontSize: 24,
  },
  sceneInfo: {
    flex: 1,
  },
  sceneName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  sceneDescription: {
    fontSize: 14,
    color: '#B0B0B0',
    marginBottom: 4,
  },
  devicesCount: {
    fontSize: 12,
    color: '#4ECDC4',
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4ECDC4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});