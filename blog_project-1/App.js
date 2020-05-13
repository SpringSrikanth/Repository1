import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"
import HomeScreen from "./src/Screens/HomeScreen";
import { BlogProvider } from "./src/Context/BlogContext";


const  App = () => {
  const Stack = createStackNavigator();
  return (
   <NavigationContainer>
     <Stack.Navigator
     initialRouteName="Home"
     >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: "Blog List"}}
      />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});

export default () =>{
  return <BlogProvider>
    <App/>
  </BlogProvider>
} 
