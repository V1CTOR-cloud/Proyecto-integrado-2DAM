import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import IndexAssistant from '../Assistant/IndexAssistant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Add from '../Assistant/Add';
import List from '../Assistant/List';

const Tab = createMaterialBottomTabNavigator();

const colors = {
  themeColor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3"
}

const BottomTabs = ({ navigation }) => (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      barStyle={{ backgroundColor: colors.themeColor }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'home' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={20} color={color} />;
        },
        tabBarActiveTintColor: colors.themeColor,
        tabBarInactiveTintColor: colors.greyish,
      })}
     >
        <Tab.Screen
          name="Home" component={IndexAssistant}
          
        />
        <Tab.Screen name="Add" component={Add} />
        <Tab.Screen name="List" component={List} />
    </Tab.Navigator>
);
export default BottomTabs;