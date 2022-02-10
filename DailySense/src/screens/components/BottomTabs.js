import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import IndexAssistant from '../Assistant/IndexAssistant';
import Add from '../Assistant/Add';
import List from '../Assistant/List';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = ({ navigation }) => (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      activeColor="#f0edf6"
          inactiveColor="#A3A3A3"
          barStyle={{ backgroundColor: "#515151" }}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="vote" color={color} size={size} />
        ),
      }}
     >
        <Tab.Screen name="Home" component={IndexAssistant} />
        <Tab.Screen name="Add" component={Add} />
        <Tab.Screen name="List" component={List} />
    </Tab.Navigator>
);
export default BottomTabs;