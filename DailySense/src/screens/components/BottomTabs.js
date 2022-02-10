import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import IndexAssistant from '../Assistant/IndexAssistant';
import Add from '../Assistant/Add';

const Tab = createBottomTabNavigator();

const BottomTabs = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Pantalla1" component={Pantalla1}/>
        <Tab.Screen name="Pantalla2" component={Pantalla2}/>
    </Tab.Navigator>
);
export default BottomTabs;