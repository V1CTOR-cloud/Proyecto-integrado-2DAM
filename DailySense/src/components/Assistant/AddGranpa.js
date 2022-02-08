/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import { Chip, RadioButton } from 'react-native-paper';



const AddGrandpa = () => {

    const [Nombre, setNombre] = React.useState("");
    const [Apellidos, setApellidos] = React.useState("");
    const [Direccion, setDireccion] = React.useState("");
    const [Edad, setEdad] = React.useState(50);
    const [Telefono, setTelefono] = React.useState("");
    const [Enfermedades, setEnfermedades] = React.useState("");
    const [Alergias, setAlergias] = React.useState("");
    const [Dependencia, setDependencia] = React.useState("");
    const [Sexo, setSexo] = React.useState("Male");




    return (
        <View style={styles.cont}>

            <View style={styles.content}>
                <Image
                    source={require('../../assets/img/logo1.png')}
                    style={styles.imagen}
                />
                <ScrollView >
                    <View style={styles.scrollv}>

                        <Text style={{ fontSize: 25, color: "black", alignSelf: "center" }}>Add Person</Text>
                        <TextInput
                            placeholder='Name'
                            style={styles.box}
                            label='Name'
                            selectionColor='#99c8de'
                            mode='outlined'
                            value={Nombre}
                            onChangeText={Nombre => setNombre(Nombre)}
                            theme={{ colors: { primary: '#99c8de' } }}
                        />
                        <TextInput
                            placeholder='Last name'
                            style={styles.box}
                            mode='outlined'
                            label='Last name'
                            selectionColor='#99c8de'
                            value={Apellidos}
                            onChangeText={Apellidos => setApellidos(Apellidos)}
                            secureTextEntry={true}
                            theme={{ colors: { primary: '#99c8de' } }}
                        />
                        <TextInput
                            placeholder='Address'
                            style={styles.box}
                            mode='outlined'
                            label='Address'
                            selectionColor='#99c8de'
                            value={Direccion}
                            onChangeText={Direccion => setDireccion(Direccion)}
                            secureTextEntry={true}
                            theme={{ colors: { primary: '#99c8de' } }}
                        />
                        <Text style={{ color: "black", margin: 10 }}>Age: {Edad}</Text>
                        <Slider
                            maximumValue={120}
                            minimumValue={0}
                            minimumTrackTintColor="#307ecc"
                            maximumTrackTintColor="#000000"
                            step={1}
                            value={Edad}
                            onValueChange={(Edad) => setEdad(Edad)}
                        />
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>


                            <Chip style={styles.chips} textStyle={{ textAlign: "center" }} onPress={() => setSexo("Male")}>Male</Chip>
                            <Chip style={styles.chips} onPress={() => setSexo("Female")}>Female</Chip>
                            <Chip style={styles.chips} onPress={() => setSexo("Other")}>Other</Chip>
                        </View>
                        <TextInput
                            placeholder='Contact phone'
                            style={styles.box}
                            label='Contact Phone'
                            selectionColor='#99c8de'
                            mode='outlined'
                            value={Telefono}
                            onChangeText={Telefono => setTelefono(Telefono)}
                            theme={{ colors: { primary: '#99c8de' } }}
                        />
                        <TextInput
                            placeholder='Diseases'
                            style={styles.box}
                            label='Diseases'
                            selectionColor='#99c8de'
                            mode='outlined'
                            value={Enfermedades}
                            onChangeText={Enfermedades => setEnfermedades(Enfermedades)}
                            theme={{ colors: { primary: '#99c8de' } }}
                        />
                        <TextInput
                            placeholder='Allergies'
                            style={styles.box}
                            label='Allergies'
                            selectionColor='#99c8de'
                            mode='outlined'
                            value={Alergias}
                            onChangeText={Alergias => setNombre(Alergias)}
                            theme={{ colors: { primary: '#99c8de' } }}
                        />

                        <Text style={{ color: "black", left: 20, fontSize: 20 }}>Dependency level</Text>

                        <View>
                            <RadioButton
                                value="Bajo"
                                status={Dependencia === 'Bajo' ? 'checked' : 'unchecked'}
                                onPress={() => setDependencia("Bajo")}
                            />
                            <RadioButton
                                value="Medio"
                                status={Dependencia === 'Medio' ? 'checked' : 'unchecked'}
                                onPress={() => setDependencia("Medio")}
                            />
                            <RadioButton
                                value="Alto"
                                status={Dependencia === 'Alto' ? 'checked' : 'unchecked'}
                                onPress={() => setDependencia("Alto")}
                            />
                        </View>




                        <Button
                            mode='contained'
                            color='#99c8de'
                            style={{ width: "65%", alignSelf: "center", margin: 20 }}
                            onPress={() => navigation.navigate("IndexAssistant")}
                            labelStyle={{ color: 'white' }}

                        >
                            Add
                    </Button>
                    </View>
                </ScrollView>
            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: '#99c8de',
        opacity: 0.98,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 0.8,
        width: '85%',
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
        height: 45,
        margin: 20,
        width: 250
    },
    subtext: {
        fontSize: 12,
        color: "#666",
        margin: 20,
    }
});

export default AddGrandpa;