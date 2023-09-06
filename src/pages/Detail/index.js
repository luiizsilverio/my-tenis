import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

import Dot from '../../components/Dot';
import SizeButton from '../../components/SizeButton';
import MyButton from '../../components/MyButton';
import Footer from '../../components/Footer';

export function Detail({ navigation }) {

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Nike Air Max Dia'
    })
  }, [])

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

        <View style={{flexDirection: 'row', width: '100%'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton>39</SizeButton>
            <SizeButton bgColor="#17181a" color="#FFF">40</SizeButton>
            <SizeButton>41</SizeButton>
            <SizeButton>42</SizeButton>
          </ScrollView>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}>Nike Air Max Dia</Text>
          <Text style={styles.textContent}>
            O tênis Nike Air Max Dia traz amortecimento e muito Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Text>
          <Text style={styles.textList}>- Categoria: Amortecimento</Text>
          <Text style={styles.textList}>- Material: mesh</Text>
        </View>
      </View>

      <MyButton>COMPRAR</MyButton>

      <View style={styles.line} />

      <Footer />

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
    width: '100%',
    maxHeight: 320
  },
  title: {
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: 8
  },
  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%'
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle: {
    fontSize: 22,
    marginVertical: '2%'
  },
  textList: {
    fontSize: 16,
    lineHeight: 25
  },
  line: {
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%'
  }
})
