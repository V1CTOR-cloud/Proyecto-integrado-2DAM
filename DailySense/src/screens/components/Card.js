import React, { useEffect } from "react";
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    Alert
} from 'react-native';

import axios from "axios";
import { MaterialCommunityIcons, AntDesign } from "react-native-vector-icons";
import { TextInput, Button } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import Information from "../Assistant/Information";
import { useNavigation } from '@react-navigation/native';
import react from "react";

const colors = {
    themeColor: "#4263ec",
    white: "#fff",
    background: "#f8f8ff",
    greyish: "#a4a4a4",
    tint: "#2b49c3",

    high: '#FF5252',
    medium: '#FFC107',
    low: '#4CAF50'
}



const Card = (props) => {
    const navigation = useNavigation();

    const imgMale = require('../../assets/img/Dependiente.png');
    const imgFemale = require('../../assets/img/Cuidadora.png');
    const imgOther = require('../../assets/img/Other.png');
    const [img, setImg] = React.useState(imgMale);

    const imgFile = () => {
        if (props.gender === "Female") {
            setImg(imgFemale);
        } else if (props.gender === "Other") {
            setImg(imgOther);
        }
    }


    const [col, setColor] = React.useState(colors.low);
    const [dis, setDisplay] = React.useState("flex");


    useEffect(() => {
        // write your code here, it's like componentWillMount

        compruebaDependencia();

        imgFile();


        //setDatos(response.data); 





        /*const res = indexAss();
        console.log(res +  " Nope");*/
    }, [])


    const postDelete = async () => {

        const resultInser = await axios.post('http:52.174.144.160:5000/test?', { op: "delete", id: props.id })

        console.log(resultInser.data);

        //setDatos(response.data);

        return resultInser.data;

    }

    const deleteFinal = async () => {

        const resultat = await postDelete();

        const { correct } = resultat;
        if (correct === "OK") {
            setDisplay("none");
            Alert.alert("Delete", "Delete was succefully");

        } else {

            Alert.alert("Error", "Unable to delete")

        }
    }

    const del = () => {

        Alert.alert("Delete", "Are you sure you want to do the delete", [
            {
                text: "Cancel",
            },
            { text: "OK", onPress: () => deleteFinal() }
        ])



    }


    function compruebaDependencia() {

        switch (props.dependency) {
            case "Low":

                setColor(colors.low);
                break;
            case "Medium":

                setColor(colors.medium);
                break;
            case "High":

                setColor(colors.high);
                break;
        }
    }



    return (
        <View style={{
            height: 180,
            width: 320,
            backgroundColor: colors.background,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            marginBottom: 50,
            marginTop: 50,
            display:dis,
        }}>
            <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
            <View style={{
                flex: 0.6,
                width: '100%',
                backgroundColor: col,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0.8
            }}>

            </View>
            <View style={styles.body}>
                <Image
                    source={img}
                    style={styles.img}
                />
                <Text style={styles.h1}>{props.name}</Text>
                <Text style={styles.h2}>{props.lastName}</Text>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Information', {
                    id: props.id,
                    tel: props.tel,
                    age: props.age,
                    allergies: props.allergies,
                    diseases: props.diseases,
                    address: props.address,
                    name: props.name,
                    lastName: props.lastName,
                    dependency: props.dependency,
                })}>
                    <LinearGradient
                        style={styles.btn1}
                        start={{ x: 1, y: 0 }}
                        colors={[colors.tint, colors.themeColor]}
                    >
                        <Text style={styles.btntext1}>More Info</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2} onPress={() => del()}>
                    <Image
                        source={require('../../assets/img/icono_basura.png')}
                        style={styles.bin}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        height: 180,
        width: 320,
        backgroundColor: colors.col,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 50,
        marginTop: 50
    },
    header: {
        flex: 0.6,
        width: '100%',
        backgroundColor: colors.low,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.8
    },
    img: {
        height: 65,
        width: 58,
        position: 'relative',
        right: 100,
        top: 40
    },
    h1: {
        fontSize: 18,
        color: '#444',
        fontWeight: '300',
        position: 'relative',
        right: 20,
        bottom: 15
    },
    h2: {
        fontSize: 19,
        color: '#444',
        fontWeight: '300',
        position: 'relative',
        bottom: 15,
        right: 20,
    },
    body: {
        flex: 3,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 3,
        width: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },
    btn1: {
        height: 35,
        width: 150,
        backgroundColor: colors.themeColor,
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn2: {
        height: 45,
        width: 45,
        backgroundColor: colors.background,
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        bottom: 0,
        left: 25
    },
    btntext1: {
        fontSize: 17,
        fontWeight: '600',
        color: colors.white
    },
    bin: {
        height: 27,
        width: 27
    }
});

export default Card;