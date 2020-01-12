import React from 'react';
import styles from '../assets/styles';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList
} from 'react-native';
import CardItem from '../components/CardItem';
import Demo from '../assets/data/demo.js';

const Matches = () => {
  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}
    >
      <View style={styles.containerMatches}>
        <ScrollView>
          <View style={styles.top}>
            <Text style={styles.title}>Matches</Text>
            <TouchableOpacity>
              <Text style={styles.icon}>
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            numColumns={1}
            data={Demo}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <CardItem
                  image={item.image}
                  name={item.name}
                  status={item.status}
                  skills={[...item.skills]}
                  description={item.description}
                />
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Matches;
