import { View, Text, StyleSheet } from "react-native";

export default function SizeButton(props) {
  const styles = getEstilos(props.bgColor, props.color);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  )
}

const getEstilos = (bgColor, color) => StyleSheet.create({
  container: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: bgColor || '#FFF',
    borderRadius: 4,
    borderColor: '#e6e6e6',
    borderWidth: 3,
    marginHorizontal: 6
  },
  text: {
    color: color || '#CCC',
    fontSize: 18,
    textAlign: "center",
    textAlignVertical: "center"
  }
})
