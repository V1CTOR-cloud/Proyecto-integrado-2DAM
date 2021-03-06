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
  Alert,
} from 'react-native';

import axios from "axios";
import { MaterialCommunityIcons, AntDesign } from "react-native-vector-icons";
import Slider from '@react-native-community/slider';
import { Chip, RadioButton, TextInput, Button } from 'react-native-paper';


const colors = {
  themeColor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3"
}

const Add = ({ route, navigation }) => {

  const { User, IdAssistant, Gender, Mail } = route.params;

  const [Nombre, setNombre] = React.useState("");
  const [Apellidos, setApellidos] = React.useState("");
  const [Direccion, setDireccion] = React.useState("");
  const [Edad, setEdad] = React.useState(50);
  const [Telefono, setTelefono] = React.useState("");
  const [Enfermedades, setEnfermedades] = React.useState("");
  const [Alergias, setAlergias] = React.useState("");
  const [Dependencia, setDependencia] = React.useState("");
  const [Sexo, setSexo] = React.useState("Male");
  const [SelectedChipMale, selectedChipMale] = React.useState(false);
  const [SelectedChipFemale, selectedChipFemale] = React.useState(false);
  const [SelectedChipOther, selectedChipOther] = React.useState(false);

  function validar() {
    if (Nombre.length == 0 &&
      Apellidos.length == 0 &&
      Direccion.length == 0 &&
      Edad == 0 &&
      Telefono.length == 0 &&
      Enfermedades.length == 0 &&
      Alergias.length == 0 &&
      Dependencia.length == 0 &&
      Sexo.length == 0) {
      Alert.alert("Error", "All fields are empty", [
        { text: "Ok", onPress: () => console.log("error") }
      ]);
      return false;
    } else {
      if (Nombre.length == 0) {
        Alert.alert("Error", "Name field is empty", [
          { text: "Ok", onPress: () => console.log("error") }
        ]);
        return false;
      } else {
        if (Apellidos.length == 0) {
          Alert.alert("Error", "Last Name field is empty", [
            { text: "Ok", onPress: () => console.log("error") }
          ]);
          return false;
        } else {
          if (Direccion.length == 0) {
            Alert.alert("Error", "Adress field is empty", [
              { text: "Ok", onPress: () => console.log("error") }
            ]);
            return false;
          } else {
            if (Edad == 0) {
              Alert.alert("Error", "Age field incorrect", [
                { text: "Ok", onPress: () => console.log("error") }
              ]);
              return false;
            } else {
              if (Telefono.length == 0) {
                Alert.alert("Error", "Phone field is empty", [
                  { text: "Ok", onPress: () => console.log("error") }
                ]);
                return false;
              } else {
                if (Enfermedades.length == 0) {
                  Alert.alert("Error", "Diseases field is empty", [
                    { text: "Ok", onPress: () => console.log("error") }
                  ]);
                  return false;
                } else {
                  if (Alergias.length == 0) {
                    Alert.alert("Error", "Diseases field is empty", [
                      { text: "Ok", onPress: () => console.log("error") }
                    ]);
                    return false;
                  } else {
                    if (Dependencia.length == 0) {
                      Alert.alert("Error", "Dependency field is empty", [
                        { text: "Ok", onPress: () => console.log("error") }
                      ]);
                      return false;
                    } else {
                      if (Sexo.length == 0) {
                        Alert.alert("Error", "Gender field is empty", [
                          { text: "Ok", onPress: () => console.log("error") }
                        ]);
                        return false;
                      } else {
                        if (SelectedChipMale == false &&
                          SelectedChipFemale == false &&
                          SelectedChipOther == false) {
                          Alert.alert("Error", "chips field is empty", [
                            { text: "Ok", onPress: () => console.log("error") }
                          ]);
                          return false;
                        } else {
                          return true;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }


  const estableixSexe = (sexe) => {
    if (sexe === 'Male') {
      selectedChipMale(!SelectedChipMale);
      selectedChipFemale(false);
      selectedChipOther(false);
    } else if (sexe === 'Female') {
      selectedChipFemale(!SelectedChipFemale);
      selectedChipMale(false);
      selectedChipOther(false);
    }
    else if (sexe === 'Other') {
      selectedChipOther(!SelectedChipOther);
      selectedChipMale(false);
      selectedChipFemale(false);
    }

    setSexo(sexe);
  }


  const postDatos = async () => {

    const resultInser = await axios.post('http:52.174.144.160:5000/test?', {
      op: "Add", idAssistant: IdAssistant, name: Nombre, lastName: Apellidos, adress: Direccion, age: Edad, tel: Telefono,
      diseases: Enfermedades, alergies: Alergias, dependency: Dependencia, gender: Sexo
    })

    console.log(resultInser.data);
    //setDatos(response.data);

    return resultInser;

  }

  const addPerson = async () => {
    if (validar()) {
      const resultat = await postDatos()

      if (resultat.data.correct === "OK") {

        Alert.alert("Added", "Person added correctly")
        navigation.navigate("IndexAssistant", { User: User, IdAssistant:IdAssistant, Gender: Gender, Mail: Mail })

      } else {

        resultat.log("Datos no es OK");

      }
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.tint} />
      <View style={styles.content}>
        <Image
          source={require('../../assets/img/logo1.png')}
          style={styles.imagen}
        />
        <ScrollView >
          <View>
            <Text style={{ fontSize: 25, color: colors.themeColor, alignSelf: "center" }}>
              Add Person
            </Text>
            <TextInput
            outlineColor={colors.themeColor}
              placeholder='Name'
              style={styles.box}
              label='Name'
              mode='outlined'
              value={Nombre}
              onChangeText={Nombre => setNombre(Nombre)}
              theme={{ colors: { primary: colors.themeColor } }}
            />
            <TextInput
            outlineColor={colors.themeColor}
              placeholder='Last name'
              style={styles.box}
              mode='outlined'
              label='Last name'
              value={Apellidos}
              onChangeText={Apellidos => setApellidos(Apellidos)}
              theme={{ colors: { primary: colors.themeColor } }}
            />
            <TextInput
            outlineColor={colors.themeColor}
              placeholder='Address'
              style={styles.box}
              mode='outlined'
              label='Address'
              selectionColor='#99c8de'
              value={Direccion}
              onChangeText={Direccion => setDireccion(Direccion)}
              theme={{ colors: { primary: colors.themeColor } }}
            />
            <Text style={{ color: "black", margin: 10 }}>Age: {Edad}</Text>
            <Slider
              maximumValue={120}
              minimumValue={0}
              minimumTrackTintColor={colors.themeColor}
              maximumTrackTintColor={colors.tint}
              step={1}
              value={Edad}
              onValueChange={(Edad) => setEdad(Edad)}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
              <Chip style={styles.chips} textStyle={{ textAlign: "center" }} selected={SelectedChipMale} onPress={() => estableixSexe('Male')}>Male</Chip>
              <Chip style={styles.chips} selected={SelectedChipFemale} onPress={() => estableixSexe('Female')}>Female</Chip>
              <Chip style={styles.chips} selected={SelectedChipOther} onPress={() => estableixSexe('Other')}>Other</Chip>
            </View>
            <TextInput
            outlineColor={colors.themeColor}
              placeholder='Contact phone'
              style={styles.box}
              label='Contact Phone'
              mode='outlined'
              value={Telefono}
              onChangeText={Telefono => setTelefono(Telefono)}
              theme={{ colors: { primary: colors.themeColor } }}
            />
            <TextInput
            outlineColor={colors.themeColor}
              placeholder='Diseases'
              style={styles.box}
              label='Diseases'
              mode='outlined'
              value={Enfermedades}
              onChangeText={Enfermedades => setEnfermedades(Enfermedades)}
              theme={{ colors: { primary: colors.themeColor } }}
            />
            <TextInput
            outlineColor={colors.themeColor}
              placeholder='Allergies'
              style={styles.box}
              label='Allergies'
              mode='outlined'
              value={Alergias}
              onChangeText={Alergias => setAlergias(Alergias)}
              theme={{ colors: { primary: colors.themeColor } }}
            />

            <Text style={{ color: "black", left: 20, fontSize: 20 }}>Dependency level</Text>

            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                  value="Low"
                  status={Dependencia === 'Low' ? 'checked' : 'unchecked'}
                  onPress={() => setDependencia("Low")}
                  color='green'
                > </RadioButton>
                <Text style={{ color: 'black' }} onPress={() => setDependencia("Low")}>Low</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                  value="Medium"
                  status={Dependencia === 'Medium' ? 'checked' : 'unchecked'}
                  onPress={() => setDependencia("Medium")}
                  color='yellow'
                /><Text style={{ color: 'black' }} onPress={() => setDependencia("Medium")}>Medium</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                  value="High"
                  status={Dependencia === 'High' ? 'checked' : 'unchecked'}
                  onPress={() => setDependencia("High")}
                  color='red'
                /><Text style={{ color: 'black' }} onPress={() => setDependencia("High")}>High</Text>
              </View>
            </View>

            <Button
              mode='contained'
              color={colors.themeColor}
              style={{ width: "65%", alignSelf: "center", margin: 20 }}
              onPress={() => addPerson()}
              labelStyle={{ color: 'white' }}
            >
              Add
            </Button>
          </View>
        </ScrollView>
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
  content: {
    flex: 0.8,
    width: '90%',
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    flexDirection: 'column',
    alignItems: 'center'
  },
  chips: {
    marginTop: 15,
  },
  imagen: {
    height: "30%",
    width: "35%",
  },
  box: {
    height: 40,
    margin: 10,
    width: 250
  },
  subtext: {
    fontSize: 12,
    color: "#666",
    margin: 20,
  }
});

export default Add;