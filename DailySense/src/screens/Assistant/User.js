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
        <Image
          source={require('../../assets/img/wall.jpg')}
          style={styles.wall}
        />
        <Text style={styles.h1}>Victor</Text>
      </View>
      <View style={styles.body}>
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
      <View style={styles.footer}>

      </View>
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    backgroundColor: colors.themeColor,
  },
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.white,
    position: 'absolute',
  },
  body: {
    flex: 4,
    width: '100%',
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  footer: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.tint,
  },
  wall: {
    height: 130,
    width: '100%',
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    position: 'absolute',
    top: 0,
    opacity: 0.5
  },
  texti: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10
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
});

export default User;