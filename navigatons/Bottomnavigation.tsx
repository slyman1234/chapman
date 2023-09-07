import React, {FC, useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreens from '../screens/HomeScreens';
import Sheduling from '../screens/Sheduling';
import Shows from '../screens/Shows';
import {MaterialIcons, Octicons, Foundation} from '@expo/vector-icons';
import colortype from '../constant/colors';
const Tab = createBottomTabNavigator();

const Bottomnavigation: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        lazy: true,
        tabBarActiveTintColor: colortype.green,
        tabBarStyle: {
          backgroundColor: colortype.black,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreens}
        options={{
          tabBarIcon: ({color, size}) => {
            return (
              <MaterialIcons name="home-filled" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Sheduling}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Octicons name="calendar" size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="Shows"
        component={Shows}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Foundation name="play-video" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default Bottomnavigation;
