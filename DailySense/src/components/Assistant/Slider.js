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
    return (
        <View style={{flex:1}}>
            <Swiper>
                <View>
                    <Card>
                        <Card.Title title="Nombre" left={(props) => <Avatar.Image size={50} theme={{ colors: { primary: "black" } }} source={require('../../assets/img/Cuidador.png')} />} />
                    </Card>
                </View>
            </Swiper>
        </View>
    )

}

export default Slider;