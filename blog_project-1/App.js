import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"
import { Provider as BlogProvider } from "./src/Context/BlogContext";
import HomeScreen from "./src/Screens/HomeScreen";
import ShowScreen from './src/Screens/ShowScreen';
import CreateScreen from './src/Screens/CreateScreen';
import EditScreen from './src/Screens/EditScreen';
import { FontAwesome ,EvilIcons } from '@expo/vector-icons';

const LogoTitle=({title})=>{
  return(
    <Text>{title}</Text>
  )
}

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
        options={({navigation,route})=>({
          headerTitle:'Blog List',
          // headerTitle: props=>{
          //   <LogoTitle {...props} />
          // },
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
      options={({navigation,route})=>({
        headerTitle: route.params.title,
        headerRight:()=>{
          return (
            <TouchableOpacity
              onPress={()=>{navigation.navigate('Edit',
              {
                title:route.params.title,
                id:route.params.id,
              }
               )}}
            >
              <EvilIcons
              name="pencil"
              style={styles.editIconStyle}
              />
            </TouchableOpacity>
          )
        }
      })}
      />
      <Stack.Screen 
      name="Create"
      component={CreateScreen}
      options={({route})=>({
        headerTitle: route.params.title
      })}
      />
      <Stack.Screen 
      name="Edit"
      component={EditScreen}
      options={({route})=>({
        headerTitle: route.params.title
      })}
      />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  editIconStyle:{
    fontSize:30,
    marginRight:10,
    marginVertical:10
  }
});

export default () =>{
  return <BlogProvider>
    <App/>
  </BlogProvider>
} 
