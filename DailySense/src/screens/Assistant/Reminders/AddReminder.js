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
  StatusBar,
  Alert
} from 'react-native';

import { arrayReminders } from '../../components/Utils';

import { Button, TextInput } from 'react-native-paper';

const colors = {
  themeColor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3"
}

const AddReminder = ({ route, navigation }) => {

  const [Recordatorio, setRecordatorio] = React.useState("");
  const [Description, setDescription] = React.useState("");
  const [Hour, setHour] = React.useState("");
  const [Min, setMin] = React.useState("");

  function subir() {
    arrayReminders.push({ id: 4, title: Recordatorio, description: Description, hour: Hour, minutes: Min })
  }

  function creado() {
    
    if (EnviaDatos()) {
      subir();
      Alert.alert("Alert Add", "Reminder added correctly", [{
        text: "Ok",
        onPress: () => navigation.navigate('Reminders'),
      }])
    }

  }

  function EnviaDatos() {
    if (Recordatorio.length === 0 && Description.length === 0) {
      Alert.alert("Error", "All fields are empty", [
        { text: "Ok", onPress: () => console.log("error") }
      ]);
      return false;
    } else {
      if (Recordatorio === "") {
        Alert.alert("Error", "The title field is empty", [
          { text: "Ok", onPress: () => console.log("error") }
        ]);
        return false;
      } else {
        if (Description === "") {
          Alert.alert("Error", "The Description field is empty", [
            { text: "Ok", onPress: () => console.log("error") }
          ]);
          return false;
        } else {
          return true;
        };
      }
    }
  }

  return (
    <View style={styles.cont}>
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <View style={styles.header}>
        <Text style={styles.h1}>Add Reminder</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.content}>
          <View style={styles.texti}>
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
          </View>
          <View style={styles.texti}>
            <TextInput
              placeholder='Your description goes here...'
              style={styles.boxArea}
              mode='outlined'
              label='Description'
              selectionColor={colors.themeColor}
              value={Description}
              multiline
              numberOfLines={3}
              onChangeText={Description => setDescription(Description)}
              theme={{ colors: { primary: colors.themeColor } }}
            />
          </View>
          <View style={styles.texti}>
            <TextInput
              placeholder='Hour goes here...'
              style={styles.box}
              mode='outlined'
              label='Hour'
              selectionColor={colors.themeColor}
              value={Hour}
              onChangeText={Hour => setHour(Hour)}
              keyboardType="numeric"
              theme={{ colors: { primary: colors.themeColor } }}
            />
          </View>
          <View style={styles.texti}>
            <TextInput
              placeholder='Minutes goes here...'
              style={styles.box}
              mode='outlined'
              label='Minutes'
              selectionColor={colors.themeColor}
              value={Min}
              onChangeText={Min => setMin(Min)}
              keyboardType="numeric"
              theme={{ colors: { primary: colors.themeColor } }}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.75}
            style={styles.btnin}
            onPress={() => creado()}>
            <Text style={styles.btninT}>Add</Text>
          </TouchableOpacity>
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
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.white,
    position: 'relative',
    top: 30,
    left: 40
  },
  body: {
    flex: 9,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    width: '100%',
  },
  content: {
    flex: 0.9,
    width: '90%',
    backgroundColor: colors.background,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  texti: {
    position: 'relative',
    bottom: 10
  },
  titulo: {
    color: '#444',
    fontSize: 35,
    fontWeight: 'bold',
    letterSpacing: 2
  },
  box: {
    height: 35,
    margin: 20,
    width: 250
  },
  boxArea: {
    height: 75,
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