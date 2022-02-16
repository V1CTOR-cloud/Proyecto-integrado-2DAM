import React, { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

import axios from "axios";
import { MaterialCommunityIcons, AntDesign } from "react-native-vector-icons";
import { TextInput } from "react-native-paper";


const colors = {
  themeColor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3"
}


const Login = ({ navigation, route }) => {

  const [User, setUser] = React.useState("");
  const [Password, setPassword] = React.useState("");

  //const [datos, setDatos] = React.useState("");

  const postDatos = async () => {

    const resultInser = await axios.post('http:52.174.144.160:5000/test?', { op: "login", user: User, pass: Password })

    console.log(resultInser.data);

    //setDatos(response.data);

    return resultInser.data;

  }

  const logIn = async () => {

    const resultat = await postDatos();

    const { correct } = resultat;
    if (correct === "OK") {

      navigation.navigate('IndexAssistant', {
        User: resultat.User,
        IdAssistant: resultat.IdAssistant,
        Gender: resultat.Gender,
        Mail: resultat.Email,
      })

    } else {

      Alert.alert("Error", "Username or password incorrect try again")

    }

  }


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.tint} />
      <View style={styles.header}>
        <Text style={styles.h1}>Welcome to DailySense </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.form}>
          <View style={styles.texti}>
            <Image
              style={styles.img}
              source={require('../../assets/img/user.png')}
            />
            <TextInput
              placeholder='Your Username goes here...'
              style={styles.box}
              label='Username'
              mode='outlined'
              value={User}
              onChangeText={User => setUser(User)}
              theme={{ colors: { primary: colors.tint } }}
            />
          </View>

          <View style={styles.texti}>
            <Image
              style={styles.img}
              source={require('../../assets/img/lock.png')}
            />
            <TextInput
              placeholder='Your Password goes here...'
              style={styles.box}
              label='Password'
              mode='outlined'
              value={Password}
              onChangeText={Password => setPassword(Password)}
              secureTextEntry={true}
              theme={{ colors: { primary: colors.tint } }}
            />
          </View>
        </View>
        <View style={styles.contbtn}>
          <TouchableOpacity
            activeOpacity={0.75}
            style={styles.btnin}
            onPress={() => logIn()}>
            <Text style={styles.btninT}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.75}
            style={styles.btnout}
            onPress={() => navigation.navigate('CreateAccount')}>
            <Text style={styles.btnoutT}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.context}>
          <Text style={{ color: "black" }}>Florida - DAM 2 - DailySense - 2022©</Text>
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
    fontSize: 25,
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
    flex: 5,
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 40,
    position: 'relative',
    top: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 0.3,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: 50
  },
  box: {
    height: 45,
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
  context: {
    height: 20,
    position: 'relative',
    top: 80
  }
});

export default Login;