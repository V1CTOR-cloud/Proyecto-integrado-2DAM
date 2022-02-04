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
            <Image
                style={styles.logo}
                source={require("../../assets/img/Dependiente.png")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    logo: {
        position:"absolute",
        top: 0,
        right: 0,
        width: "40%",
        height: "30%",
        resizeMode: "stretch",
    },
})

export default IndexAssistant;