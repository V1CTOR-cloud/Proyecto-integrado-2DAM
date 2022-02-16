import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import { MaterialCommunityIcons, AntDesign } from "react-native-vector-icons";
import { TextInput, Button } from "react-native-paper";


const colors = {
  themeColor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3",
  error: '#FF5252'
}

const User = ({ navigation }) => {

  const [User, setUser] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [Val, setVal] = React.useState("");

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <View style={styles.header}>
        <View style={styles.contheader}>
          <Image
            source={require('../../assets/img/user2.png')}
            style={styles.logo}
          />
          <Text style={styles.h1}>Victor</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.cont}>
          <View style={styles.texti}>
            <Image
              style={styles.img}
              source={require('../../assets/img/mail.png')}
            />
            <TextInput
              placeholder='Your Email goes here...'
              style={styles.box}
              label='Email'
              mode='outlined'
              theme={{ colors: { primary: colors.tint } }}
            />
          </View>
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
        </View>
        <View style={styles.contbtn}>
          <Button
            mode='contained'
            color={colors.themeColor}
            style={styles.btn}
            onPress={() => navigation.navigate("IndexAssistant")}
            labelStyle={{ color: colors.white, width: '99%' }}
          >
            Save Changes
          </Button>
          <Button
            mode='outlined'
            color={colors.error}
            style={styles.btnout}
            onPress={() => navigation.navigate("Login")}
            labelStyle={{ width: '80%' }}
          >
            log out
          </Button>
        </View>
      </View>
      <View style={styles.footer}>

      </View>
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 300,
  },
  header: {
    flex: 0.8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.themeColor,
  },
  contheader: {
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 10,
    flexDirection: 'row',
    padding: 5
  },
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.white,
  },
  body: {
    flex: 1.5,
    width: '90%',
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10
  },
  footer: {
    flex: 1,
    width: '100%',

  },
  wall: {
    height: 112,
    width: '101%',
    position: 'absolute',
    top: 0,
    opacity: 0.3
  },
  texti: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  box: {
    height: 45,
    margin: 20,
    width: 250
  },
  img: {
    height: 20,
    width: 20,
  },
  logo: {
    height: 40,
    width: 40,
    position: 'relative',
    right: 20
  },
  contbtn: {
    height: 100,
    width: '90%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btn: {
    height: 45,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnout: {
    height: 45,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.error,
    borderWidth: 1,
  },
});

export default User;