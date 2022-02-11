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
  TouchableOpacity
} from 'react-native';

import { MaterialCommunityIcons, AntDesign } from "react-native-vector-icons";
import { TextInput, Button } from "react-native-paper";
import Add from "./Add";


const colors = {
  themeColor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3"
}

const IndexAssistant = ({ navigation }) => {

  const image = ["../../assets/img/Dependiente.png", "../../assets/img/Dependiente.png"]


  const [Id, setId] = React.useState("");

  const [datos, setDatos] = React.useState([]);
  const post = "[{id: " + Id + "}]";

  const postDatos = async () => {
    const res = await axios.post('http:52.174.144.160:5000/127.0.0.1/test?', { post });
    setDatos(res.data.items);
    console.log(datos);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <View style={styles.header}>
        <View style={styles.headercontext}>
          <Image
            style={styles.img}
            source={require("../../assets/img/feather.png")}
          />
          <Text style={styles.h2}>
            Welcome
          </Text>
          <Text style={styles.h1}>
            Víctor
          </Text>
        </View>
        <TouchableOpacity style={styles.contimg} onPress={() => navigation.navigate('User')}>
          <Image
            style={styles.logo}
            source={require('../../assets/img/Dependiente.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>

      </View>
      <TouchableOpacity style={styles.contbtn} onPress={() => navigation.navigate('Add')}>
          <Image
            style={styles.imgbtn}
            source={require('../../assets/img/Add.png')}
          />
        </TouchableOpacity>
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
    flex: 2,
    width: '110%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: colors.themeColor,
    borderRadius: 100,
    position: 'relative',
    bottom: 40,
  },
  img: {
    height: 40,
    width: 40,
    position: 'relative',
    top: 40
  },
  headercontext: {
    height: 100,
    width: 200,
    justifyContent: 'center',
    position: 'relative',
    left: 50,
    top: 30,
    flexDirection: 'column'
  },
  h1: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.white,
    position: 'relative',
    left: 60
  },
  h2: {
    fontSize: 18,
    fontWeight: '300',
    color: colors.white,
    position: 'relative',
    left: 60
  },
  contimg: {
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.white,
    position: 'relative',
    left: 300,
    bottom: 50,
    borderRadius: 100
  },
  logo: {
    height: 65,
    width: 60,
  },
  content: {
    flex: 5,
    width: '100%',
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contbtn: {
    height: 60,
    width: 60,
    backgroundColor: colors.themeColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200,
    position: 'absolute',
    bottom: 35,
    right: 30
  },
  imgbtn: {
    height: 40,
    width: 40
  }
});

export default IndexAssistant;