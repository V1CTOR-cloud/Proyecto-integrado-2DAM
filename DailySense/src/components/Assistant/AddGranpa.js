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
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Chip } from 'react-native-paper';



const AddGrandpa = () => {

    const [Nombre, setNombre] = React.useState("");
    const [Apellidos, setApellidos] = React.useState("");
    const [Direccion, setDireccion] = React.useState("");
    const [Edad, setEdad] = React.useState();
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

                        <Text style={{ fontSize: 25, color: "black", alignSelf:"center" }}>Add Person</Text>
                        <TextInput
                            placeholder='Name'
                            style={styles.box}
                            label='Name'
                            selectionColor='#27AE60'
                            mode='outlined'
                            value={Nombre}
                            onChangeText={Nombre => setNombre(Nombre)}
                            theme={{ colors: { primary: '#27AE60' } }}
                        />
                        <TextInput
                            placeholder='Name'
                            style={styles.box}
                            label='Name'
                            selectionColor='#27AE60'
                            mode='outlined'
                            value={Nombre}
                            onChangeText={Nombre => setNombre(Nombre)}
                            theme={{ colors: { primary: '#27AE60' } }}
                        />
                        <TextInput
                            placeholder='Name'
                            style={styles.box}
                            label='Name'
                            selectionColor='#27AE60'
                            mode='outlined'
                            value={Nombre}
                            onChangeText={Nombre => setNombre(Nombre)}
                            theme={{ colors: { primary: '#27AE60' } }}
                        />
                        <TextInput
                            placeholder='Name'
                            style={styles.box}
                            label='Name'
                            selectionColor='#27AE60'
                            mode='outlined'
                            value={Nombre}
                            onChangeText={Nombre => setNombre(Nombre)}
                            theme={{ colors: { primary: '#27AE60' } }}
                        />
                        <TextInput
                            placeholder='Last name'
                            style={styles.box}
                            mode='outlined'
                            label='Last name'
                            selectionColor='#27AE60'
                            value={Apellidos}
                            onChangeText={Apellidos => setApellidos(Apellidos)}
                            secureTextEntry={true}
                            theme={{ colors: { primary: '#27AE60' } }}
                        />
                        <TextInput
                            placeholder='Address'
                            style={styles.box}
                            mode='outlined'
                            label='Address'
                            selectionColor='#27AE60'
                            value={Direccion}
                            onChangeText={Direccion => setDireccion(Direccion)}
                            secureTextEntry={true}
                            theme={{ colors: { primary: '#27AE60' } }}
                        />
                        <Slider
                            maximumValue={120}
                            minimumValue={0}
                            minimumTrackTintColor="#307ecc"
                            maximumTrackTintColor="#000000"
                            step={1}
                            value={Edad}
                            onValueChange={(Edad) => setEdad(Edad)}
                        />

                        <Chip onPress={() => setSexo("Male")}>Male</Chip>
                        

                        <Button
                            mode='contained'
                            color='#99c8de'
                            style={{ width: "65%", alignSelf: "center", margin:20 }}
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
    scrollv: {

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