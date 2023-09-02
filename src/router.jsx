import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="home"
          component={Home}
        />
        <Stack.Screen
          name="detail"
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;
