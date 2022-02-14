import React from "react";
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

import { MaterialCommunityIcons, AntDesign } from "react-native-vector-icons";
import { TextInput, Button } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";



const colors = {
    themeColor: "#4263ec",
    white: "#fff",
    background: "#f4f6fc",
    greyish: "#a4a4a4",
    tint: "#2b49c3"
}

const Card = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
            <View style={styles.header}>
            </View>
            <View style={styles.body}>
                <Image
                    source={require('../../assets/img/Dependiente.png')}
                    style={styles.img}
                />
                <Text style={styles.h1}>María</Text>
                <Text style={styles.h2}>Luisa</Text>
            </View>
            <View style={styles.footer}>
                <LinearGradient
                    style={styles.btn1}
                    start={{ x: 1, y: 0 }}
                    colors={[colors.tint, colors.themeColor]}
                >
                    <Text style={styles.btntext1}>More Info</Text>
                </LinearGradient>
                <TouchableOpacity style={styles.btn2}>
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
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 50,
        marginTop: 50
    },
    header: {
        flex: 0.6,
        width: '100%',
        backgroundColor: '#FF5252',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.8
    },
    img: {
        height: 65,
        width: 60,
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