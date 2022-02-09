import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import Swiper from "react-native-web-swiper";

const SliderPills = () => {

    const [Foto, setFoto] = React.useState("../../assets/img/Pastillas.png")

    return (
        <View style={styles.slider}>
            <Swiper>
                <View>
                    <Card>
                        <Card.Title title="Lunes" left={(props) => <Avatar.Image size={50} theme={{ colors: { primary: "transparent" } }} source={require("../../assets/img/Pastillas.png")} />} />
                        <Card.Content>
                            <Title>Omeprazol</Title>
                            <Paragraph>One pill</Paragraph>
                            <Paragraph>35/15/3022</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button
                                labelStyle={{color: '#FF5252'}}
                            >
                                Eliminar
                            </Button>
                        </Card.Actions>
                    </Card>
                </View>
            </Swiper>
        </View>
    )

}

const styles = StyleSheet.create({
    slider: {
        flex: 1,
        borderRadius: 20
    },
    img: {
        height: '40%',
        width: '40%',
        backgroundColor: 'green'
    }
});

export default SliderPills;