import React, { useState } from 'react';
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
    memoryImages: [
      require('./assets/travel.jpg'),
      require('./assets/travel1.jpg'),
      require('./assets/travel2.jpg'),
      require('./assets/travel3.jpg'),
      require('./assets/travel4.jpg'),
    ]
  };
  
  const toggleLike = () => {
    setLiked(!liked);
  };

  const shareMemory = () => {
    console.log("Travel Memory Shared:");
    console.log(travelData);
    Alert.alert("Memory Shared", "Check the console log for travel details!");
  };

  const renderImageItem = ({ item }) => (
    <Image
      source={item}
      style={styles.memoryImage}
      resizeMode="cover"
    />
  );

  return (
    <LinearGradient colors={['#fdf6e3', '#d1884f']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Riddhi Bhaskar Patil</Text>
        
        <Image
          source={travelData.memoryImages[0]}
          style={styles.mainImage}
          resizeMode="cover"
        />
        
        <View style={styles.memoryContainer}>
          <Text style={styles.memoryTitle}>Memory Photos</Text>
          <FlatList
            data={travelData.memoryImages}
            renderItem={renderImageItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.memoryList}
          />
        </View>

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
          <TouchableOpacity style={styles.button} onPress={toggleLike}>
            <Image
              source={liked
                ? require('./assets/icons/heart_filled.png')
                : require('./assets/icons/heart_outlined.jpg')}
              style={{ width: 26, height: 26 }}
              resizeMode="contain"
            />
            <Text>Like</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button} onPress={shareMemory}>
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
  mainImage: {
    width: '100%',
    height: 180,
  },
  memoryContainer: {
    marginTop: 10,
    marginHorizontal: 15,
  },
  memoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  memoryList: {
    paddingRight: 15,
  },
  memoryImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
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