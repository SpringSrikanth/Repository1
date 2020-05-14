import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"
import { Provider as BlogProvider } from "./src/Context/BlogContext";
import HomeScreen from "./src/Screens/HomeScreen";
import ShowScreen from './src/Screens/ShowScreen';
import CreateScreen from './src/Screens/CreateScreen';
import { FontAwesome  } from '@expo/vector-icons';

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
        options={({navigation})=>({
          headerTitle:'Blog List',
          headerRight:()=>{
            return ( 
              <TouchableOpacity
              onPress={()=>{navigation.navigate('Create',{title:'Create Blog'})}}
              >
              <FontAwesome 
                   name="plus-square-o"
                   size={30}
                   color="black" 
                   style={{marginRight:10}}
               />
               </TouchableOpacity>
               )
           }
        })}
      />
      <Stack.Screen 
      name="Show"
      component={ShowScreen}
      />
      <Stack.Screen 
      name="Create"
      component={CreateScreen}
      options={({route})=>({
        headerTitle: route.params.title
      })}
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
