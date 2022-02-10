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
 
 import Login from "./src/screens/start/Login";
 import CreateAccount from './src/screens/start/CreateAccount';
 import BottomTabs from './src/screens/components/BottomTabs';
 import IndexAssistant from './src/screens/Assistant/IndexAssistant';

 
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
 
 function Landing({navigation}) {
   return (
     <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Login')}>
             <StatusBar barStyle="light-content" backgroundColor={colors.themeColor}/>
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
 
 const App = () =>{
 
   return (
     <NavigationContainer>
       <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="Landing" component={Landing} />
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="CreateAccount" component={CreateAccount} />
         <Stack.Screen name="BottomTabs" component={BottomTabs} />
         <Stack.Screen name="IndexAssistant" component={IndexAssistant} />
       </Stack.Navigator>
     </NavigationContainer>
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