/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native';

import Login from "./src/screens/start/Login";
import CreateAccount from './src/screens/start/CreateAccount';
import BottomTabs from './src/screens/components/BottomTabs';
import IndexAssistant from './src/screens/Assistant/IndexAssistant';
import List from './src/screens/Assistant/List';
import Add from './src/screens/Assistant/Add';
import User from './src/screens/Assistant/User';
import Information from './src/screens/Assistant/Information';
import Tasks from './src/screens/Assistant/Tasks/Tasks';
import AddTask from './src/screens/Assistant/Tasks/AddTask';
import Reminders from './src/screens/Assistant/Reminders/Reminders';
import AddReminder from './src/screens/Assistant/Reminders/AddReminder';
import Pills from './src/screens/Assistant/Pills/Pills';
import AddPills from './src/screens/Assistant/Pills/AddPills';


import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

const LOGO = require("./src/assets/img/logo1.png");
const colors = {
  themeColor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3"
}

function Landing({ navigation }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Login')}>
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <View style={styles.circle}>

      </View>
      <Image
        style={styles.img}
        source={LOGO}
      />
      <Text style={styles.h1}>DailySense</Text>
    </TouchableOpacity>

  );
}

const Stack = createNativeStackNavigator();

const App = ({ navigation }) => {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen name="IndexAssistant" component={IndexAssistant} />
          <Stack.Screen name="Add" component={Add} />
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="Information" component={Information} />
          <Stack.Screen name="Tasks" component={Tasks} />
          <Stack.Screen name="AddTask" component={AddTask} />
          <Stack.Screen name="Reminders" component={Reminders} />
          <Stack.Screen name="AddReminder" component={AddReminder} />
          <Stack.Screen name="Pills" component={Pills} />
          <Stack.Screen name="AddPills" component={AddPills} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    height: 500,
    width: 500,
    backgroundColor: colors.background,
    position: 'absolute',
    right: -180,
    top: -180,
    borderRadius: 1000
  },
  img: {
    height: 350,
    width: 350,
    position: 'relative',
    zIndex: 2,
    bottom: 80
  },
  h1: {
    fontSize: 35,
    fontWeight: 'bold',
    position: 'relative',
    zIndex: 2,
    bottom: 120,
    color: colors.white
  },
});

export default App;