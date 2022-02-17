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


import { useNavigation } from '@react-navigation/native';

const colors = {
    themeColor: "#4263ec",
    white: "#fff",
    background: "#f4f6fc",
    greyish: "#a4a4a4",
    tint: "#2b49c3"
}

const CardPills = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.h1}>{props.day} </Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.h2}>
                    Medication:
                </Text>
                <Text style={styles.h3}>
                    {props.med}
                </Text>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.contbtn}
                >
                    <Image
                        style={styles.img}
                        source={require('../../../assets/img/icono_basura.png')}
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
        borderRadius: 5,
        marginBottom: 50,
        marginTop: 50
    },
    header: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        paddingLeft: 20,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4
    },
    h1: {
        fontSize: 20,
        fontWeight: '400',
        color: '#141414'
    },
    h2: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#141414'
    },
    h3: {
        width: 220,
        fontSize: 10,
        color: '#141414'
    },
    body: {
        flex: 2,
        width: '100%',
        paddingTop: 10,
        paddingLeft: 20,
    },
    footer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    },
    contbtn: {
        padding: 5,
        borderRadius: 200,
        backgroundColor: colors.background,
        position: 'relative',
        left: 120,
        bottom: 20
    },
    img: {
        height: 30,
        width: 30,
    }
});

export default CardPills;