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
  TouchableOpacity,
} from 'react-native';

import { Button, TextInput } from 'react-native-paper';

const colors = {
  themeColor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3"
}

const AddReminder = () => {

  const [Recordatorio, setRecordatorio] = React.useState("");
  const [Hour, setHour] = React.useState("");
  const [Min, setMin] = React.useState("");
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
            selectionColor={colors.themeColor}
            value={Recordatorio}
            onChangeText={Recordatorio => setRecordatorio(Recordatorio)}
            theme={{ colors: { primary: colors.themeColor } }}
          />
          <TextInput
            placeholder='Your description goes here...'
            style={styles.boxArea}
            mode='outlined'
            label='Description'
            selectionColor={colors.themeColor}
            value={Recordatorio}
            multiline
            numberOfLines={3}
            onChangeText={Recordatorio => setRecordatorio(Recordatorio)}
            theme={{ colors: { primary: colors.themeColor } }}
          />
          <TextInput
            placeholder='Hour goes here...'
            style={styles.box}
            mode='outlined'
            label='Hour'
            selectionColor={colors.themeColor}
            value={Recordatorio}
            onChangeText={Hour => setHour(Hour)}
            theme={{ colors: { primary: colors.themeColor } }}
          />
          <TextInput
            placeholder='Minutes goes here...'
            style={styles.box}
            mode='outlined'
            label='Minutes'
            selectionColor={colors.themeColor}
            value={Min}
            onChangeText={Min => setMin(Min)}
            theme={{ colors: { primary: colors.themeColor } }}
          />
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
    flex: 1,
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
    margin: 20,
    width: 250
  },
  boxArea: {
    height: 85,
    margin: 20,
    width: 250
  },
});

export default AddReminder;