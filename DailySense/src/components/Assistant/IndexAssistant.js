import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import Slider from "./Slider";
import { useNavigation } from '@react-navigation/native';

const IndexAssistant = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: "column" }}>
                    <Text style={styles.titol}>Bienvenido</Text>
                    <Text style={styles.titol}>JUAN</Text>
                </View>
                <Image
                    style={styles.logo}
                    source={require("../../assets/img/Dependiente.png")} />
            </View>
            <View style={styles.body}>
                <View style={styles.slider}>
                    <Slider />
                </View>
            </View>
            <View style={styles.bottom}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("AddGrandpa")} style={styles.buttonAddPerson}>
                        <Image source={require('../../assets/img/Lista.png')} style={{ height: 66, width: 66 }}></Image>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("AddGrandpa")} style={styles.buttonAddPerson}>
                        <Image source={require('../../assets/img/Añadir.png')} style={{ height: 66, width: 66 }}></Image>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("AddGrandpa")} style={styles.buttonAddPerson}>
                        <Image source={require('../../assets/img/Ajustes.png')} style={{ height: 66, width: 66 }}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    bottom: {
        flex: 0.5,
        width: '100%',
        flexDirection: "row",
        alignSelf: 'flex-end',
    },
    body: {
        flex: 2,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",

    },
    titol: {
        left: 30,
        fontSize: 25,
        color: "black",
    },
    logo: {
        top: 0,
        left: 40,
        right: 0,
        width: "20%",
        height: "35%",
        marginLeft: 60,
        resizeMode: "stretch",
    },
    buttonAddPerson: {
        paddingTop: 5,
        paddingRight: 25,
        paddingBottom: 5,
        paddingLeft: 25,
        marginTop: 20
    },
    slider: {
        height: "70%",
        width: "90%",

    },
})

export default IndexAssistant;