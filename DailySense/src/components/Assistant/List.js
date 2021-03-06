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
    ScrollView,
    TouchableOpacity
} from 'react-native';

import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import { Chip, RadioButton } from 'react-native-paper';



const Lista = () => {

    const navigation = useNavigation();

    const person = ["Paco Martinez", "Paco A", "Paco B", "Paco C", "Paco D", "Paco F",];




    return (
        <View style={styles.cont}>
            <View style={styles.content}>
                <Image
                    source={require('../../assets/img/logo1.png')}
                    style={styles.imagen}
                />
                <ScrollView >
                    <View style={styles.scrollv}>
                        {person.map((person, index) => {
                            return (
                                <TouchableOpacity key={index} style={styles.listItem} onPress={() => navigation.navigate()}>
                                    <Image source={require('../../assets/img/Dependiente.png')} style={styles.ico}></Image>
                                    <Text style={{ color: 'black' }}>{person}</Text>
                                </TouchableOpacity>
                            );
                        })
                        }
                    </View>
                </ScrollView>
                <Button
                    style={{ bottom: 10 }}
                    labelStyle={{ color: 'white' }}
                    mode='contained'
                    color='#99c8de' onPress={() => navigation.goBack()}>Return</Button>
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
    },
    ico: {
        height: 32,
        width: 30
    },
    listItem: {
        width: "90%",
        flexDirection: "row",
        margin: 10,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Lista;