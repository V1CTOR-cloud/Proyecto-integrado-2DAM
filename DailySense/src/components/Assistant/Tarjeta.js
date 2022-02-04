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
 
 
 const Tarjeta = () => {
 
   return (
     <View style={styles.cont}>
       <Text style={styles.titulo}>Hacer yoga</Text>
       <Text style={styles.sub_titulo}>En el gimnasio</Text>
       <TouchableOpacity onPress={() => alert('Borrado perfectamente')}>
        <View style={styles.delimitador}>
            <Image
                source={require('../../assets/img/icono_basura.png')}
                style={styles.img}
            />
        </View>
       </TouchableOpacity>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   cont: {
        height: 100,
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10
   },
   titulo: {
       fontSize: 17,
       fontWeight: 'bold',
       marginLeft: 20,
       marginTop: 12
   },
   sub_titulo: {
        fontSize: 15,
        marginLeft: 20,
        marginTop: 2
   },
    img: {
        height: 40,
        width: 20,
   },
   delimitador: {
        height: 50,
        width: 50,
        backgroundColor: '#F7F7F7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 200,
        position: 'relative',
        bottom: 30,
        left: '79%'
    },
 });
 
 export default Tarjeta;
 