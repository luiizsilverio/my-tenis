import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';

import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{ headerShown: false }}> */}
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="detail"
          component={Detail}
          options={{
            title: 'Detalhes' ,
            headerRight: () => (
              <TouchableOpacity>
                <Feather
                  name="shopping-cart"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;
