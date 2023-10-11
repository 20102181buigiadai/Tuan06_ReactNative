import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 

import Screen01 from "./screens/Screen_01.js";
import Screen02 from "./screens/Screen_02.js";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Screen01" component={Screen01} /> */}
        <Stack.Screen name="Screen02" component={Screen02} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
