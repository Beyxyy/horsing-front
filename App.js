import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/Home';
import { GlobalContext } from './Hooks/GlobalContext';


export default function App() {
  
  const Stack = createNativeStackNavigator()
  
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>

          {/* Passing the context to the screens */}
          <GlobalContext.Provider value={{datas, addGlobalContextDate, removeGlobalContextData}}>

            {/* No extra data passed to the component */}
            <Stack.Screen name="Home" component={HomeScreen} />

            {/* Passing some data to the Details screen */}
            <Stack.Screen name="Details">{(props) => <DetailScreen {...props} extraData={someData} />}</Stack.Screen>

          </GlobalContext.Provider>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

