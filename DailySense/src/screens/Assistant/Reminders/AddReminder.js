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

//import { arrayReminders } from '../../components/Utils';
import { useNavigation } from '@react-navigation/native';
import { Button, TextInput } from 'react-native-paper';
import axios from "axios";

const colors = {
  themeColor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3"
}

const AddReminder = ({ route, navigation }) => {

  const { IdDependent } = route.params;
  const [Title, setTitle] = React.useState("");
  const [Description, setDescription] = React.useState("");
  const type = 1;

  function validar() {
    if (Title.length === 0 &&
      Description.length === 0) {
      Alert.alert("Error", "All fields are empty", [
        { text: "Ok", onPress: () => console.log("error") }
      ]);
      return false;
    } else {
      if (Title === "") {
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
        }
      };
    }
  }


  const postDatos = async () => {

    const resultInser = await axios.post('http:52.174.144.160:5000/test?', {
      op: "newAttribute", dependents: IdDependent, type: type, name: Title, description: Description,
    })

    console.log(resultInser.data);
    //setDatos(response.data);

    return resultInser;

  }

  const addReminder = async () => {
    if (validar()) {
      const resultat = await postDatos()

      if (resultat.data.correct === "OK") {

        Alert.alert("Added", "Reminder added correctly")
        navigation.navigate('Reminders', { id: IdDependent })

      } else {

        resultat.log("Datos no es OK");

      }
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.tint} />
      <View style={styles.header}>
        <Text style={styles.h1}>Add reminders</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.form}>
          <View style={styles.texti}>
            <Image
              style={styles.img}
              source={require('../../../assets/img/label.png')}
            />
            <TextInput
              placeholder='Title of reminder here...'
              style={styles.box}
              label='Title'
              mode='outlined'
              selectionColor={colors.themeColor}
              outlineColor={colors.themeColor}
              theme={{ colors: { primary: colors.tint } }}
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
              placeholder='Description of reminder here...'
              style={styles.boxA}
              label='Description'
              numberOfLines={3}
              multiline
              selectionColor={colors.themeColor}
              outlineColor={colors.themeColor}
              mode='outlined'
              theme={{ colors: { primary: colors.tint } }}
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
            onPress={() => addReminder()}
            labelStyle={{ color: colors.white, width: '99%' }}
          >
            SAVE
          </Button>
        </View>
      </View>
    </View>
  );
};

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
    top: 70,
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

export default AddReminder;