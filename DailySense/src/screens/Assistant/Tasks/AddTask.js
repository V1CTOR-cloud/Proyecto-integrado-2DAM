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
  StatusBar, Alert
} from 'react-native';


import { arrayTasks } from '../../components/Utils';
import { useNavigation } from '@react-navigation/native';
import CardTask from './CardTask';

import { TextInput, Button } from 'react-native-paper';

const colors = {
  themeColor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3",
  pink: "#D16BA5"
}

const AddTask = ({ navigation }) => {

  const [Title, setTitle] = React.useState("");
  const [Description, setDescription] = React.useState("");

  function subir() {
    arrayTasks.push({ id: 4, title: Title, description: Description })
  }

  function creado() {
    if (validar()) {
      subir();
      Alert.alert("Alert Add", "Reminder added correctly", [{
        text: "Ok",
        onPress: () => navigation.navigate('Tasks'),
      }])
    }

  }

  function validar() {
    if (Title.length == 0 && Description.length == 0) {
      Alert.alert("Error", "All fields are empty", [
        { text: "Ok", onPress: () => console.log("error") }
      ]);
      return false;
    } else {
      if (Title.length == 0) {
        Alert.alert("Error", "The day field is empty", [
          { text: "Ok", onPress: () => console.log("error") }
        ]);
        return false;
      } else {
        if (Description.length == 0) {
          Alert.alert("Error", "The medication field is empty", [
            { text: "Ok", onPress: () => console.log("error") }
          ]);
          return false;
        } else {
          return true;
        }
      }
    }
  }



  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.tint} />
      <View style={styles.header}>
        <Text style={styles.h1}>Add tasks</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.form}>
          <View style={styles.texti}>
            <Image
              style={styles.img}
              source={require('../../../assets/img/label.png')}
            />
            <TextInput
              style={styles.box}
              placeholder='Title goes here...'
              label='Title'
              selectionColor={colors.themeColor}
              mode='outlined'
              outlineColor={colors.themeColor}
              theme={{ colors: { primary: colors.themeColor } }}
              value={Title}
              onChangeText={(Title) => setTitle(Title)}
            />
          </View>
          <View style={styles.texti}>
            <Image
              style={styles.img}
              source={require('../../../assets/img/description.png')}
            />
            <TextInput
              style={styles.boxA}
              placeholder='Description goes here...'
              label='Description'
              multiline
              numberOfLines={3}
              selectionColor={colors.themeColor}
              mode='outlined'
              outlineColor={colors.themeColor}
              theme={{ colors: { primary: colors.themeColor } }}
              value={Description}
              onChangeText={(Description) => setDescription(Description)}
            />
          </View>
        </View>
        <View style={styles.contbtn}>
          <Button
            mode='contained'
            color={colors.themeColor}
            style={styles.btn}
            onPress={() => creado()}
            labelStyle={{ color: colors.white, width: '99%' }}
          >
            SAVE
          </Button>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.tint,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  texti: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10
  },
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    position: 'relative',
    left: 30,
    color: colors.white
  },
  img: {
    height: 20,
    width: 20,
  },
  content: {
    height: 600,
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 40,
    position: 'relative',
    top: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 0.3,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: 20
  },
  box: {
    height: 35,
    margin: 15,
    width: 250,
  },
  boxA: {
    height: 105,
    margin: 15,
    width: 250,
  },
  contbtn: {
    height: 150,
    width: '80%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'relative',
    bottom: 0
  },
  btn: {
    height: 45,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: 20,
    left: 10
  },
  btnout: {
    height: 45,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.themeColor,
    borderWidth: 1,
  },
  context: {
    height: 20,
    position: 'relative',
    top: 80
  }
});

export default AddTask;