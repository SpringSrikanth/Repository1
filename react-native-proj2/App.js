import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import SampleScreen from './src/screens/SampleScreen';
import GreetingsScreen from "./src/screens/GreetingsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";
import TextScreenTwo from "./src/screens/TextScreenTwo";


const Stack=createStackNavigator();

const App=()=>{
    return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen 
           name="Home"
           component={HomeScreen}
           options={{title: "Welcome"}}
          />
          <Stack.Screen
           name="Components"
           component={ComponentsScreen}
          />
          <Stack.Screen
          name='Sample'
          component={SampleScreen}
          />
          <Stack.Screen
          name='Greetings'
          component={GreetingsScreen}
          />
          <Stack.Screen
          name="List"
          component={ListScreen}
          />
          <Stack.Screen
          name="Image"
          component={ImageScreen}
          />
          <Stack.Screen
          name="Counter"
          component={CounterScreen}
          />
          <Stack.Screen
          name="Color"
          component={ColorScreen}
          />
          <Stack.Screen
          name="Square"
          component={SquareScreen}
          />
          <Stack.Screen
          name="Text"
          component={TextScreen}
          />
          <Stack.Screen
          name="TextScreenTwo"
          component={TextScreenTwo}
          />
        </Stack.Navigator>
    </NavigationContainer>
    )
}


export default App;