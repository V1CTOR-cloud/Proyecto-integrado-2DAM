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

const User = ({ route, navigation }) => {
  const { User } = route.params;
  const [UserName, setUserName] = React.useState(User);
  const [Mail, setMail] = React.useState("");
  const [Val, setVal] = React.useState("");

  function cambiaNombre() {
    navigation.navigate("IndexAssistant", {
      User: UserName
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <View style={styles.header}>
        <View style={styles.contheader}>
          <Image
            source={require('../../assets/img/user2.png')}
            style={styles.logo}
          />
          <Text style={styles.h1}>
            {UserName}
          </Text>
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
              value={UserName}
              onChangeText={UserName => setUserName(UserName)}
              theme={{ colors: { primary: colors.tint } }}
            />
          </View>
        </View>
        <View style={styles.contbtn}>
          <TouchableOpacity
            activeOpacity={0.75}
            style={styles.btnin}
            onPress={() => cambiaNombre()}>
            <Text style={styles.btninT}>SAVE CHANGES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.75}
            style={styles.btnout}
            onPress={() => navigation.navigate('CreateAccount', {
              User: User
            })}>
            <Text style={styles.btnoutT}>LOG OUT</Text>
          </TouchableOpacity>
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
    
  },
  contheader: {
    height: 50,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 10,
    flexDirection: 'row',
    padding: 5
  },
  h1: {
    fontSize: 24,
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
    width: '89%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    
  },
  btnin: {
    height: 40,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.themeColor,
    borderRadius: 5
  },
  btninT: {
    fontSize: 15,
    color: colors.white,
    fontWeight: '300'
  },
  btnout: {
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: colors.error,
    borderWidth: 1,
  },
  btnoutT: {
    fontSize: 15,
    color: colors.error,
    fontWeight: '300'
  },
});

export default User;