import React from "react";
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

import { MaterialCommunityIcons, AntDesign } from "react-native-vector-icons";
import { TextInput, Button } from "react-native-paper";


const colors = {
  themeColor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3"
}


function Validation() {
  setVal(true)

  if (User == "" && Password == "") {
    setVal(false)
  } else {
    if (User == "") {
      setVal(false)
    } else {
      if (Password == "") {
        setVal(false)
      }
    }
  }
}

function IniciarSesion() {
  if (Validation) {

  } else {

  }
}


const Login = ({ navigation }) => {

  const [User, setUser] = React.useState("");
  const [Password, setPassword] = React.useState("");

  const [Userbd, setUserbd] = React.useState("");
  const [Gender, setGender] = React.useState("");

  const [datos, setDatos] = React.useState([]);
  const post = "[{op: login, user: " + User + ", pass: " + Password + "}]";
  const [Id, setId] = React.useState();

  const postDatos = async () => {
    const res = await axios.post('http:52.174.144.160:5000/127.0.0.1/test?', { post });
    setDatos(res.data.items);
    console.log(datos);
  }

  const logIn = () => {
    postDatos;
    if (datos.length !== 0) {
      if (datos[0].correct === "true") {
        setId(datos[0].IdAssistant);
        setUserbd(datos[0].User);
        setGender(datos[0].Gender);

        navigation.navigate("IndexAssistant", { id: Id, user: Userbd, gender: Gender });
      } else {
        Alert.alert("Error", "Username or password incorrect try again")
      }
    } else {
      Alert.alert("Error", "Username or password incorrect try again")
    }

  }


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.tint} />
      <View style={styles.header}>
        <Text style={styles.h1}>Welcome to DailySense</Text>
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
          <Button
            mode='contained'
            color={colors.themeColor}
            style={styles.btn}
            onPress={() => navigation.navigate("IndexAssistant")}
            labelStyle={{ color: colors.white, width: '99%' }}
          >
            Sign in
          </Button>
          <Button
            mode='outlined'
            color={colors.themeColor}
            style={styles.btnout}
            onPress={() => navigation.navigate("CreateAccount")}
            labelStyle={{ width: '90%' }}
          >
            Sign up
          </Button>
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
  btn: {
    height: 45,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center'
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

export default Login;