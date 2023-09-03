import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import bannerImg from '../../assets/banner.png';
import { Shoes } from '../../components/Shoes';

export function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={bannerImg}
          style={styles.image}
        />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>TÊNIS</Text>
          <Text style={[styles.title, {color: '#CECECF'}]}>•</Text>
          <Text style={[styles.title, {color: '#CECECF'}]}>MASCULINO</Text>
          <TouchableOpacity style={styles.button}>
            <MaterialIcons
              name="filter-list"
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divider} />

      <ScrollView>
        <Text style={[styles.title, {marginLeft: 8}]}>LANÇAMENTOS</Text>

        <View style={styles.container2}>
          <Shoes
            img={require('../../assets/1.png')}
            name='Nike Air Max Dia'
            price={140.90}
            onPress={() => navigation.navigate('detail')}
          />
          <Shoes
            img={require('../../assets/2.png')}
            name='Nike Shox 10 novo modelo 2023'
            price={190.90}
            onPress={() => navigation.navigate('detail')}
          />
        </View>

        <View style={styles.container2}>
          <Shoes
            img={require('../../assets/3.png')}
            name='Adidas Lite Racer 3.0'
            price={120.90}
            onPress={() => navigation.navigate('detail')}
          />
          <Shoes
            img={require('../../assets/4.png')}
            name='Rebook 2023'
            price={179.90}
            onPress={() => navigation.navigate('detail')}
          />
        </View>

        <View style={styles.container2}>
          <Shoes
            img={require('../../assets/5.png')}
            name='Puma RS-Trck'
            price={220.90}
          />
          <Shoes
            img={require('../../assets/6.png')}
            name='Adidas Campus'
            price={219.90}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header: {
    marginBottom: 8
  },
  image: {
    width: '100%'
  },
  titleContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%',
    gap: 8
  },
  title: {
    fontFamily: 'Anton_400Regular',
    fontSize: 24,
  },
  button: {
    position: 'absolute',
    right: 0,
    alignSelf: 'center'
  },
  divider: {
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
