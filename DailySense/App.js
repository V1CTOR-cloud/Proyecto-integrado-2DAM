import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SplashScreen from "./src/components/Start/SplashScreen.js";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from "./src/components/Start/Login";
import CrearCuenta from "./src/components/Start/Creacuenta";
import IndexAssistant from "./src/components/Assistant/IndexAssistant";
import Tareas from './src/components/Assistant/Tareas';
import AnyadirTarea from './src/components/Assistant/AnyadirTarea';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Group>
              <Stack.Screen name="SplashScreen" component={SplashScreen} />
            </Stack.Group>
            <Stack.Group>
              <Stack.Screen name="Login" component={Login} />
            </Stack.Group>
            <Stack.Group>
              <Stack.Screen name="CrearCuenta" component={CrearCuenta} />
            </Stack.Group>
            <Stack.Group>
              <Stack.Screen name="IndexAssistant" component={IndexAssistant} />
            </Stack.Group>
            <Stack.Group>
              <Stack.Screen name="Tareas" component={Tareas} />
            </Stack.Group>
            <Stack.Group>
              <Stack.Screen name="AnyadirTarea" component={AnyadirTarea} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;