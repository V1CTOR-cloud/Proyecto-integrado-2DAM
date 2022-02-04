import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

const IndexAssistant = () => {


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titol}>Bienvenido JUAN</Text>
                <Image
                    style={styles.logo}
                    source={require("../../assets/img/Dependiente.png")} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        flex:0.3,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    titol:{
        left:40,
        fontSize:25,
        color:"black",
    },
    logo: {
        top: 0,
        left:20,
        right: 0,
        width: "50%",
        height: "80%",
        resizeMode: "stretch",
    },
})

export default IndexAssistant;