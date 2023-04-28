import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Drawernavigation from './navigatons/Drawernavigation';
import Studentshows from './screens/Studentshows';
import Sports from './screens/Sports';
import Studentunion from './screens/Studentunion';
import Singleshedule from './screens/Singleshedule';

import 'react-native-gesture-handler';

const Stack = createStackNavigator();
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="HomeScreens" component={Drawernavigation} />
          <Stack.Screen name="studentshow" component={Studentshows} />
          <Stack.Screen name="sports" component={Sports} />
          <Stack.Screen name="studentunion" component={Studentunion} />
          <Stack.Screen name="singleshedule" component={Singleshedule} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
