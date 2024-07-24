import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/Home';
// import { GlobalContext } from './Hooks/GlobalContext';
import DetailScreen from './Screens/detailScreen';


export default function App() {
  
  const Stack = createNativeStackNavigator()
  const someData = {name : 'John Doe', age : 25}
  // console.log(<GlobalContext/>);
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>

            {/* No extra data passed to the component */}
            <Stack.Screen name="Home" component={HomeScreen} />

            {/* Passing some data to the Details screen */}
            <Stack.Screen name="Details">{(props) => <DetailScreen {...props} extraData={someData} />}</Stack.Screen>

        </Stack.Navigator>
    </NavigationContainer>
  );
}

