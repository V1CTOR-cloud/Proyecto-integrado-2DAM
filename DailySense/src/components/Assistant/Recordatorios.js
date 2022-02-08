/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   StyleSheet,
   Text,
   View,
   Image,
   TouchableOpacity
 } from 'react-native';
 
 import Tarjeta from './Tarjeta';
 import { useNavigation } from '@react-navigation/native';
 
 
 const Recordatorios = () => {
   const navigation = useNavigation();
   return (
     <View style={styles.cont}>
       <View style={styles.header}>
         <Text style={styles.titulo}>Reminders</Text>
       </View>
       <View style={styles.body}>
         <Tarjeta/>
         <Tarjeta/>
         <Tarjeta/>
         <Tarjeta/>
       </View>
       <View style={styles.footer}>
         <TouchableOpacity onPress={() => { navigation.navigate("IndexAssistant") }}>
           <Image
             source={require('../../assets/img/home_icon.png')}
             style={styles.img}
           />
         </TouchableOpacity>
         <TouchableOpacity  onPress={() => { navigation.navigate("AnyadirRecordatorio") }}>
           <Image
             source={require('../../assets/img/plus_icon.png')}
             style={styles.img}
           />
         </TouchableOpacity>
       </View>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   cont: {
     flex: 1,
     backgroundColor: '#99c8de'
   },
   header: {
     flex: 0.5,
     justifyContent: 'center',
     alignItems: 'center'
   },
   body: {
     flex: 3,
     justifyContent: 'space-evenly',
     alignItems: 'center',
   },
   footer: {
     flex: 1,
     justifyContent: 'space-evenly',
     alignItems: 'center',
     flexDirection: 'row'
   },
   titulo: {
     color: 'white',
     fontSize: 35,
     fontWeight: 'bold',
     letterSpacing: 2
   },
   img: {
     height: 50,
     width: 50
   },
 });
 
 export default Recordatorios;
 