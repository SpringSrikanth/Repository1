import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "./src/Screens/HomeScreen";
import ResultShowScreen from "./src/Screens/ResultShowScreen";

const Stack=createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
         name="Home"
         component={HomeScreen}
         options={{title: "Business Search"}}
        />
        <Stack.Screen
        name="ResultShow"
        component={ResultShowScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
