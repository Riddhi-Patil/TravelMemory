import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const TravelCard = () => {
  const [liked, setLiked] = useState(false);

  const travelData = {
    name: "Tropical Paradise Resort",
    date: "March 20, 2024",
    location: "Pacific Ocean",
    duration: "3 Days",
    person: "3",
    rating: "4.8",
    note: "Escape to the ultimate tropical paradise retreat with pristine beaches, lush greenery, and luxurious accommodations.",
  };
  
  const toggleLike = () => {
    setLiked(!liked);
  };

  const shareMemory = () => {
    console.log("Travel Memory Shared:");
    console.log(travelData);
    Alert.alert("Memory Shared", "Check the console log for travel details!");
  };

  return (
    <LinearGradient colors={['#fdf6e3', '#d1884f']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Riddhi Bhaskar Patil</Text>
        <Image
          source={require('./assets/travel.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.title}>{travelData.name}</Text>
        <Text style={styles.date}>{travelData.date}</Text>
        <Text style={styles.note}>{travelData.note}</Text>

        <View style={styles.infoBox}>
          <Text>{travelData.location}</Text>
          <Text>Duration: {travelData.duration}</Text>
          <Text>Person: {travelData.person}</Text>
          <Text>Rating: {travelData.rating}</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity onPress={toggleLike}>
            <Image
            source={liked
              ? require('./assets/icons/heart_filled.png')
              : require('./assets/icons/heart_outlined.jpg')}
              style={{ width: 26, height: 26 }}
              resizeMode="contain"
            />
            <Text>Like</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={shareMemory}>
              <Image
              source={require('./assets/icons/share.png')}
              style={{ width: 26, height: 26 }}
              resizeMode="contain"
              />
              <Text>Share</Text>
              </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default TravelCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    paddingBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  header: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 10,
  },
  image: {
    width: '100%',
    height: 180,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10,
    marginHorizontal: 15,
  },
  date: {
    fontSize: 14,
    color: 'gray',
    marginHorizontal: 15,
    marginBottom: 5,
  },
  note: {
    fontSize: 14,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  infoBox: {
    backgroundColor: '#f0f8ff',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
  },
});
