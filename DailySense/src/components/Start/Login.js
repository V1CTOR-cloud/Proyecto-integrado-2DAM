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
  Alert
} from 'react-native';

import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const Login = () => {

  const [User, setUser] = React.useState("");
  const [Password, setPassword] = React.useState("");

  const [Val, setVal] = React.useState("");

  const navigation = useNavigation();

  function Validation() {
    setVal(true)
    if (User == "") {
      setVal(false)
    } else {
      if (Password == "") {
        setVal(false)
      }
    }
  }

  function Login(){
    if(Validation){

    }else{

    }
  }




  return (
    <View style={styles.cont}>
      <View style={styles.content}>
        <Image
          source={require('../../assets/img/logo1.png')}
          style={styles.imagen}
        />
        <Text style={{fontSize:25, color:"black"}}>Log In</Text>
        <TextInput
          placeholder='Username'
          style={styles.box}
          label='Username'
          selectionColor='#27AE60'
          mode='outlined'
          value={User}
          onChangeText={User => setUser(User)}
          theme={{ colors: { primary: '#27AE60' } }}
        />
        <TextInput
          placeholder='Password'
          style={styles.box}
          mode='outlined'
          label='Password'
          selectionColor='#27AE60'
          value={Password}
          onChangeText={Password => setPassword(Password)}
          secureTextEntry={true}
          theme={{ colors: { primary: '#27AE60' } }}
        />

        <TouchableOpacity onPress={() => { navigation.navigate("CrearCuenta") }}>
          <Text style={styles.subtext}>Dont have an account? Register here</Text>
        </TouchableOpacity>

        <Button
          mode='contained'
          color='#99c8de'
          style={{position:"absolute",bottom:60}}
          onPress={()=> navigation.navigate("IndexAssistant")}
        >
          Iniciar sesión
         </Button>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: '#99c8de',
    opacity: 0.98,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 0.8,
    width: '85%',
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    flexDirection: 'column',
    alignItems: 'center'
  },
  imagen: {
    height: "30%",
     width: "35%",
  },
  box: {
    height: 45,
    margin:20,
    width: 250
  },
  subtext: {
    fontSize: 12,
    color: "#666",
    margin:20,
  }
});

export default Login;