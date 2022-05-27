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

import { useNavigation } from '@react-navigation/native';
import CardTask from './CardTask';
import { TextInput, Button } from 'react-native-paper';
import axios from "axios";

const colors = {
  themeColor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3",
  pink: "#D16BA5"
}

const AddTask = ({route, navigation}) => {
  
  const { IdDependent } = route.params;
  const [Title, setTitle] = React.useState("");
  const [Description, setDescription] = React.useState("");
  const type=2;

  

  function validar() {
    if (Title == "" && Description == "") {
      alert('Error - All fields are empty');
    } else {
      if (Title == "") {
        alert('Error - Title field empty');
      } else {
        if (Description == "") {
          alert('Error - Description field empty');
        } else {
          return true;
        }
      }
    }
  }

  const postDatos = async () => {

    console.log(IdDependent);

    const resultInser = await axios.post('http:52.174.144.160:5000/test?', {
      op: "newAttribute", dependents: IdDependent, type: type, name: Title, description: Description
    })

    console.log(resultInser.data);
    //setDatos(response.data);

    return resultInser;

  }

  const addTask = async () => {
    if (validar()) {
      const resultat = await postDatos()

      if (resultat.data.correct === "OK") {

        Alert.alert("Added", "Task added correctly")
        navigation.navigate('Tasks', { id:IdDependent})
      } else {

        resultat.log("Datos no es OK");

      }
    }
  }

  return (
    <View style={styles.cont}>
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <View style={styles.content}>
        <Text style={styles.titulo}>Add tasks</Text>
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
        <TextInput
          style={styles.boxArea}
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
        <Button
          mode='contained'
          color={colors.themeColor}
          labelStyle={styles.btn}
          onPress={() => addTask()}
          style={{ width: 150 }}
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
    backgroundColor: colors.themeColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flex: 0.5,
    width: '80%',
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  titulo: {
    color: '#444',
    fontSize: 20,
    fontWeight: 'bold'
  },
  box: {
    height: 45,
    width: 250,
    backgroundColor: '#F7F7F7'
  },
  boxArea: {
    height: 105,
    width: 250,
    backgroundColor: '#F7F7F7'
  },
  btn: {
    color: '#F7F7F7',
  },
});

export default AddTask;