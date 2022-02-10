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

 import { TextInput, Button } from 'react-native-paper';
 import { TimePickerModal } from 'react-native-paper-dates';
 
 import Tarjeta from './Tarjeta';
 
 
 const AñadirRecordatorios = () => {

  const [Recordatorio, setRecordatorio] = React.useState("");
  const [visible, setVisible] = React.useState(false)
  const onDismiss = React.useCallback(() => {
    setVisible(false)
  }, [setVisible])

  const onConfirm = React.useCallback(
    ({ hours, minutes }) => {
      setVisible(false);
      console.log({ hours, minutes });
    },
    [setVisible]
  );
 
   return (
     <View style={styles.cont}>
       <View style={styles.header}>

       </View>
       <View style={styles.body}>
            <View style={styles.content}>
                <Text style={styles.titulo}>
                    Add
                </Text>
                <TextInput
                    placeholder='Your title goes here...'
                    style={styles.box}
                    mode='outlined'
                    label='Title'
                    selectionColor='#99c8de'
                    value={Recordatorio}
                    onChangeText={Recordatorio => setRecordatorio(Recordatorio)}
                    theme={{ colors: { primary: '#99c8de' } }}
                />
                <TextInput
                    placeholder='Your description goes here...'
                    style={styles.boxArea}
                    mode='outlined'
                    label='Description'
                    selectionColor='#99c8de'
                    value={Recordatorio}
                    multiline
                    numberOfLines={3}
                    onChangeText={Recordatorio => setRecordatorio(Recordatorio)}
                    theme={{ colors: { primary: '#99c8de' } }}
                />
                <TimePickerModal
                  visible={visible}
                  onDismiss={onDismiss}
                  onConfirm={onConfirm}
                  hours={12}
                  minutes={14}
                  label="Select time"
                  cancelLabel="Cancel"
                  confirmLabel="Ok"
                  animationType="fade"
                  locale={'en'}
                />
                <Button
                  mode='contained'
                  color='#99c8de'
                  icon='watch'
                  style={{width: 140}}
                  onPress={()=> setVisible(true)}>
                  Pick time
      </Button>
            </View>
       </View>
       <View style={styles.footer}>

       </View>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   cont: {
     flex: 1,
     backgroundColor: '#99c8de',
     justifyContent: 'center',
     alignItems: 'center'
   },
   header: {
    flex: 1,
    width: '100%',
    },
   body: {
    flex: 7,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    },
   footer: {
       flex: 1,
       width: '100%',
   },
   content: {
    flex: 0.75,
    width: '80%',
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center'
    },
    titulo: {
        color: '#444',
        fontSize: 35,
        fontWeight: 'bold',
        letterSpacing: 2
    },
    box: {
        height: 45,
        margin:20,
        width: 250
    },
    boxArea: {
      height: 85,
      margin:20,
      width: 250
  },
 });
 
 export default AñadirRecordatorios;