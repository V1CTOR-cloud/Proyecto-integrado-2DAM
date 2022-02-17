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
  ScrollView
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import CardReminder from './CardReminders';
import { arrayReminders } from '../../components/Utils';

const colors = {
  themeColor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3",
  pink: "#D16BA5"
}


const Reminders = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.cont}>
      <StatusBar barStyle="light-content" backgroundColor={colors.tint} />
      <View style={styles.header}>
        <Text style={styles.titulo}>Reminders</Text>
      </View>
      <View style={styles.body}>
        <ScrollView>
          {arrayReminders.map((element, pos) => {
            return (
              <CardReminder key={pos} id={element.id} desc={element.description} title={element.title} h={element.hour} m={element.minutes} ></CardReminder>
            )
          })}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Button
          mode='contained'
          color={colors.background}
          labelStyle={{ width: 120 }}
          onPress={() => navigation.goBack()}
        >
          Home
        </Button>
        <Button
          mode='outlined'
          color={colors.white}
          style={styles.btnout}
          labelStyle={{ width: 75 }}
          onPress={() => navigation.navigate('AddReminder')}
        >
          Add
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: colors.tint
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
  contbtn: {
    height: 50,
    width: 170,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200,
  },
  imgbtn: {
    height: 40,
    width: 40
  },
  btnout: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.white,
    borderWidth: 1,
  },
});

export default Reminders;
