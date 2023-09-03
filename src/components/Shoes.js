import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export function Shoes({ img, name, price, onPress }) {

  function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={img}
        style={styles.image}
      />
      <Text style={styles.text}>{name}</Text>
      <Text style={[styles.text, {opacity: 0.4}]}>
        {formatPrice(price)}
      </Text>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 175,
    height: 175
  },
  text: {
    fontSize: 14,
    maxWidth: 175,
    maxHeight: 20
  }
})
