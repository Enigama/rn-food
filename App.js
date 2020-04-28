import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Business Search" component={SearchScreen} />
        <Stack.Screen
          name="Results Search"
          component={ResultsShowScreen}
          options={({route}) => ({title: route.params.name})}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
