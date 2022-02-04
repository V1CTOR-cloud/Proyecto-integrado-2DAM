import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { Card, Avatar } from "react-native-paper";
import Swiper from "react-native-web-swiper";

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
                <Swiper>
                    <View>
                        <Card>
                            <Card.Title title="Nombre" left={(props) => <Avatar.Image size={50}  theme={{colors:{primary:"black"}}} source={require('../../assets/img/Dependiente.png')} />} />
                        </Card>
                    </View>
                    <View>
                        <Text style={{ color: "black" }}>VIvva adada</Text>
                    </View>
                </Swiper>
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