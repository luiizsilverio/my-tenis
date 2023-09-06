import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Shoes } from "./Shoes";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
      <View style={{flexDirection: "row"}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{marginHorizontal: 8}}>
            <Shoes
              img={require('../assets/1.png')}
              name='Nike Shox 10 novo modelo 2023'
              price={190.90}
            />
          </View>
          <View style={{marginHorizontal: 8}}>
            <Shoes
              img={require('../assets/3.png')}
              name='Adidas Lite Racer 3.0'
              price={190.90}
            />
          </View>
          <View style={{marginHorizontal: 8}}>
            <Shoes
              img={require('../assets/4.png')}
              name='Rebook 2023'
              price={190.90}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 24,
    fontFamily: 'Anton_400Regular',
    marginVertical: '2%',
    paddingHorizontal: '2%'
  }
})
