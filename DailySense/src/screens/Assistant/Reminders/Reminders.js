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
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <View style={styles.header}>
        <Text style={styles.titulo}>Reminders</Text>
      </View>
      <View style={styles.body}>
        <ScrollView>
          {arrayReminders.map((element, pos) => {
            return (
              <CardReminder key={pos} id={element.id} desc={element.description} title={element.title} time={element.time} ></CardReminder>
            )
          })}
        </ScrollView>
      </View>
      <View style={styles.footer}>
      <View style={styles.contbtn}>
          <TouchableOpacity
            activeOpacity={0.75}
            style={styles.btnin}
            onPress={() => navigation.goBack()}>
            <Text style={styles.btninT}>HOME</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.75}
            style={styles.btnout}
            onPress={() => navigation.navigate('AddReminder')}>
            <Text style={styles.btnoutT}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: colors.themeColor
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
  imgbtn: {
    height: 40,
    width: 40
  },
  contbtn: {
    height: 150,
    width: '80%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  btnin: {
    height: 45,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 5
  },
  btninT: {
    fontSize: 16,
    color: colors.themeColor,
    fontWeight: '300'
  },
  btnout: {
    height: 45,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: colors.white,
    borderWidth: 1,
  },
  btnoutT: {
    fontSize: 16,
    color: colors.white,
    fontWeight: '300'
  },
});

export default Reminders;
