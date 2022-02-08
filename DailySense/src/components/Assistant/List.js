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



const Lista = () => {

    const navigation = useNavigation();

    const person = ["Paco Martinez", "Paco A", "Paco B", "Paco C", "Paco D", "Paco F",];


    const list = () => {
        return person.map((person, index) => {
            return(
            <View key={index} style={{ flexDirection: "row", margin:10 }}>
                <Image source={require('../../assets/img/Dependiente.png')} style={styles.ico}></Image>
                <Text>{person}</Text>
            </View>
            );
        });
    }


    return (
        <View style={styles.cont}>
            <View style={styles.content}>
                <Image
                    source={require('../../assets/img/logo1.png')}
                    style={styles.imagen}
                />
                <ScrollView >
                    <View style={styles.scrollv}>
                        {list()}
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
    },
    ico: {
        height: "20%",
        width: "30"
    }
});

export default Lista;