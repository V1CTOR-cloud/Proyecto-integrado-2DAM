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


const colors = {
  themeColor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3",
  pink: "#D16BA5"
}

const AddReminder = ({ route, navigation }) => {

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

          <TextInput
            placeholder='Your title goes here...'
            style={styles.box}
            mode='outlined'
            label='Title'
            selectionColor='#99c8de'
            value={Recordatorio}
            onChangeText={Recordatorio => setRecordatorio(Recordatorio)}
            theme={{ colors: { primary: colors.themeColor } }}
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
            theme={{ colors: { primary: colors.themeColor } }}
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
          <View style={styles.contbtn}>
            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.btnin}
              onPress={() => navigation.goBack()}>
              <Text style={styles.btninT}>SAVE CHANGES</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.btnout}
              onPress={() => setVisible(true)}>
              <Text style={styles.btnoutT}>PICK TIME</Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor: colors.themeColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 350
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
    flex: 0.7,
    width: '80%',
    backgroundColor: '#F7F7F7',
    borderRadius: 5,
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
    margin: 20,
    width: 250
  },
  boxArea: {
    height: 85,
    margin: 20,
    width: 250
  },
  contbtn: {
    height: 150,
    width: '80%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'relative',
    bottom: 0,
    flexDirection: 'column-reverse'
  },
  btnin: {
    height: 45,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.themeColor,
    borderRadius: 5
  },
  btninT: {
    fontSize: 16,
    color: colors.white,
    fontWeight: '300'
  },
  btnout: {
    height: 45,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: colors.themeColor,
    borderWidth: 1,
  },
  btnoutT: {
    fontSize: 16,
    color: colors.themeColor,
    fontWeight: '300'
  },
});

export default AddReminder;