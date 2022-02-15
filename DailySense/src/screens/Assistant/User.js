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
  tint: "#2b49c3"
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
          <View style={styles.texti}>
            <Image
              style={styles.img}
              source={require('../../assets/img/lock.png')}
            />
            <TextInput
              placeholder='Confirm your password'
              style={styles.box}
              label='Confirm password'
              mode='outlined'
              secureTextEntry={true}
              theme={{ colors: { primary: colors.tint } }}
            />
          </View>
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
    alignItems: 'center'
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
    flex: 3,
    width: '94%',
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60
  },
  cont: {

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
});

export default User;