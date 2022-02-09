import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { Card, Avatar } from "react-native-paper";
import Swiper from "react-native-web-swiper";

const Slider = () => {

    const [Foto, setFoto] = React.useState("../../assets/img/Dependiente.png")

    return (
        <View style={{flex:1}}>
            <Swiper>
                <View>
                    <Card>
                        <Card.Title title="Nombre" left={(props) => <Avatar.Image size={50} theme={{ colors: { primary: "trasnparent" } }} source={require("../../assets/img/Cuidadora.png")} />} />
                    </Card>
                </View>
            </Swiper>
        </View>
    )

}

export default Slider;