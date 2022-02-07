import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import Slider from "./Slider";

const IndexAssistant = () => {
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
            <View style={{ flex: 0.3 }}>
                <Slider></Slider>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.3,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
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
        width: "50%",
        height: "80%",
        resizeMode: "stretch",
    },
})

export default IndexAssistant;