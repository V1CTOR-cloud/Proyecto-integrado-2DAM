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

import axios from "axios";
import { MaterialCommunityIcons, AntDesign } from "react-native-vector-icons";
import { TextInput, Button } from "react-native-paper";
import LinearGradient from 'react-native-linear-gradient'

import Add from "./Add";
import Card from "../components/Card";
import Information from "./Information";

const colors = {
  themeColor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3",
  pink: "#D16BA5"
}

const IndexAssistant = ({ navigation }) => {

  const image = ["../../assets/img/Dependiente.png", "../../assets/img/Dependiente.png"]





  const [Id, setId] = React.useState();
  let card = [];
  //const [datos, setDatos] = React.useState([]);


  const indexAss = async () => {

    const resultInser = await axios.post('http:52.174.144.160:5000/test?', { op: "login2", id: 2 })


    console.log(resultInser.data);



    for (i = 0; i < resultInser.data.lenght; i++) {
      cards.push(
        <Card id={resultInser.data[i].IdDependents} name={resultInser.data[i].Name} lastName={resultInser.data[i].LastName}></Card>
      )
    }

    //setDatos(response.data);

    return resultInser.data;

  }

  const res = indexAss();
  console.log(res);



  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <View
        style={styles.header}

      >
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
        <ScrollView>
          {card}
          <Card id={Id} />
          <Card id={Id} />
          <Card id={Id} />
        </ScrollView>
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
    flex: 1.3,
    width: '110%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: colors.themeColor,
    position: 'relative',
    bottom: 40,
    opacity: 1,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  img: {
    height: 40,
    width: 40,
    position: 'relative',
    top: 40,
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
    bottom: 38,
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'relative',
    bottom: 5,
    paddingBottom: 20
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