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
  TouchableOpacity
} from 'react-native';

import { useIsFocused } from "@react-navigation/native";

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

const IndexAssistant = ({ route, navigation }) => {

  const isFocused = useIsFocused();

  const imgMale = require('../../assets/img/Dependiente.png');
  const imgFemale = require('../../assets/img/Cuidadora.png');
  const imgOther = require('../../assets/img/Other.png');
  const [img, setImg] = React.useState(imgMale);

  const { User, IdAssistant, Gender, Mail } = route.params;

  
  // const { IdAssistant } = route.params;
  //const { Gender } = route.params;
  const [personesAsociades, setPersonesAsociades] = React.useState([]);
  //const [datos, setDatos] = React.useState([]);

  const imgFile = () => {
    if (Gender === "Female") {
      setImg(imgFemale);
    } else if (Gender === "Other") {
      setImg(imgOther);
    }
  }

  useEffect(() => {
    // write your code here, it's like componentWillMount

    if (isFocused) {
      obtinPersonesAssociades();

      imgFile();
    }



    //setDatos(response.data); 





    /*const res = indexAss();
    console.log(res +  " Nope");*/
  }, [navigation, isFocused])

  const obtinPersonesAssociades = async () => {
    const resultInser = await axios.post('http:52.174.144.160:5000/test?', { op: "login2", id: IdAssistant })


    console.log(JSON.stringify(resultInser.data));


    setPersonesAsociades(resultInser.data.array);



  }



  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <View
        style={styles.header}
      >
        <View style={styles.headercontext}>
          <Image
            style={styles.img}
            source={require('../../assets/img/feather.png')}
          />
          <Text style={styles.h2}>
            Welcome
          </Text>
          <Text style={styles.h1}>
            {User}
          </Text>
        </View>
        <TouchableOpacity style={styles.contimg} onPress={() => navigation.navigate("User", {
          User: User, IdAssistant: IdAssistant, Gender: Gender, Mail: Mail,
        })}>
          <Image
            style={styles.logo}
            source={img}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <ScrollView>
          {personesAsociades.map((element, pos) => {
            return (<Card key={pos} id={element.IdDependents} name={element.Name} lastName={element.LastName} diseases={element.Diseases} tel={element.FamilyContact}
              address={element.Address} age={element.Age} allergies={element.Allergies} dependency={element.DependencyLevel} gender={element.Gender} 
              User={User} IdAssistant={IdAssistant}></Card>);
          })}
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.contbtn} onPress={() => navigation.navigate('Add', { User: User, IdAssistant: IdAssistant, Gender: Gender, Mail: Mail })}>
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
    height: 58,
    width: 52,
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