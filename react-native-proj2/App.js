import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import SampleScreen from './src/screens/SampleScreen';
import GreetingsScreen from "./src/screens/GreetingsScreen";

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
        </Stack.Navigator>
    </NavigationContainer>
    )
}


export default App;