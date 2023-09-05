import { Text, View, StyleSheet, useWindowDimensions } from "react-native";

export default function Dot({ color }) {
  const largura = useWindowDimensions().width * 0.05;
  const styles = getEstilos(largura, color);

  return (
    <View style={styles.container}>
    </View>
  )
}

const getEstilos = (largura, cor) => StyleSheet.create({
  container: {
    width: largura,
    height: largura,
    borderRadius: (largura / 2),
    backgroundColor: cor,
    marginHorizontal: '2.5%',
    elevation: 4,
  }
})
