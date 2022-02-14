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

import { useNavigation } from '@react-navigation/native';

import { TextInput, Button } from 'react-native-paper';


const AddTask = () => {

  const [Title, setTitle] = React.useState("");
  const [Description, setDescription] = React.useState("");

  const navigation = useNavigation();
  return (
    <View style={styles.cont}>
      <View style={styles.content}>
        <Text style={styles.titulo}>Add tasks</Text>
        <TextInput
          style={styles.box}
          placeholder='Title goes here...'
          label='Title'
          selectionColor='#99c8de'
          mode='outlined'
          outlineColor='#99c8de'
          theme={{ colors: { primary: '#99c8de' } }}
          value={Title}
          onChangeText={(Title) => setTitle(Title)}
        />
        <TextInput
          style={styles.boxArea}
          placeholder='Description goes here...'
          label='Description'
          multiline
          numberOfLines={3}
          selectionColor='#99c8de'
          mode='outlined'
          outlineColor='#99c8de'
          theme={{ colors: { primary: '#99c8de' } }}
          value={Description}
          onChangeText={(Description) => setDescription(Description)}
        />
        <Button
          mode='contained'
          color='#99c8de'
          labelStyle={styles.btn}
          onPress={() => navigation.navigate('Tasks', {
            titulo: Title,
            descripcion: Description
          })}
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
    backgroundColor: '#99c8de',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flex: 0.5,
    width: '80%',
    backgroundColor: 'white',
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