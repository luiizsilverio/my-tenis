import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Dot from '../../components/Dot';

export function Detail({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Nike Air Max Dia'
  })

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/detail.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <View>
        <View>
          <Text style={[styles.title, {fontSize: 24}]}>R$ 140,90</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, {fontSize: 30}]}>Nike Air Max Dia</Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color="#2379f4" />
          <Dot color="#Fb6e53" />
          <Dot color="#ddd" />
          <Dot color="#000" />
        </View>


      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image: {
    width: '100%'
  },
  title: {
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: 8
  },
  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%'

  }
})
