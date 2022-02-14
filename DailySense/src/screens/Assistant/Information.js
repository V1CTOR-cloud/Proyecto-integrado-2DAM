import React from "react";
import { useEffect, useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import { MaterialCommunityIcons, AntDesign } from "react-native-vector-icons";
import { TextInput, Button, Chip } from "react-native-paper";


const colors = {
    themeColor: "#4263ec",
    white: "#fff",
    background: "#f4f6fc",
    greyish: "#a4a4a4",
    tint: "#2b49c3",
    fadedwhite: "#E0E1E4"
}

const Information = ({ navigation }) => {

    const [ColorText, setColorText] = React.useState(colors.greyish);
    const [selected, setSelected] = useState(false);
    const [textColor, setTextColor] = useState(colors.white);
    const [style, setStyle] = useState({
        borderColor: colors.fadedwhite,
        backgroundColor: colors.background
    });

    useEffect(() => {
        if (selected) {
            setTextColor(colors.white);
            setStyle({ borderColor: colors.themeColor, backgroundColor: colors.white });
        } else {
            setTextColor(colors.themeColor);
            setStyle({ borderColor: colors.themeColor, backgroundColor: 'transparent' });
        }
    }, [selected]);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
            <View style={styles.header}>
                <Text style={styles.h1}>
                    María Luisa
                </Text>
                <View style={styles.contchips}>
                    <Chip
                        selected={selected}
                        selectedColor={textColor}
                        textStyle={{ color: textColor }}
                        style={styles.chip}
                        onPress={() => navigation.navigate('Tasks')}
                    >Tasks</Chip>
                    <Chip
                        textStyle={{ color: textColor }}
                        style={styles.chip}
                        onPress={() => navigation.navigate('Reminders')}
                    >Reminders</Chip>
                    <Chip
                        textStyle={{ color: textColor }}
                        style={styles.chip}
                        onPress={() => setColorText(colors.themeColor)}
                    >Pills</Chip>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.content}>
                    <View style={styles.texti}>
                        <Image
                            source={require('../../assets/img/contact.png')}
                            style={styles.img}
                        />
                        <Text style={styles.text}>
                            Contact Phone:
                        </Text>
                        <Text>
                            96 155 39 19
                        </Text>
                    </View>
                    <View style={styles.texti}>
                        <Image
                            source={require('../../assets/img/adress.png')}
                            style={styles.img}
                        />
                        <Text style={styles.text}>
                            Adress:
                        </Text>
                        <Text>
                            Calle Utiel 59
                        </Text>
                    </View>
                    <View style={styles.texti}>
                        <Image
                            source={require('../../assets/img/userico.png')}
                            style={styles.img}
                        />
                        <Text style={styles.text}>
                            Age:
                        </Text>
                        <Text>
                            79
                        </Text>
                    </View>
                    <View style={styles.texti}>
                        <Image
                            source={require('../../assets/img/allergies.png')}
                            style={styles.img}
                        />
                        <Text style={styles.text}>
                            Allergies:
                        </Text>
                        <Text>
                            Dust, nuts, gluten
                        </Text>
                    </View>
                    <View style={styles.texti}>
                        <Image
                            source={require('../../assets/img/diseases.png')}
                            style={styles.img}
                        />
                        <Text style={styles.text}>
                            Diseases:
                        </Text>
                        <Text>
                        COVID-19, E. coli
                        </Text>
                    </View>
                    <View style={styles.texti}>
                        <Image
                            source={require('../../assets/img/Pills.png')}
                            style={styles.img}
                        />
                        <Text style={styles.text}>
                            Medication:
                        </Text>
                        <Text>
                        Omaprazol, Ramipril
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.contbtn} onPress={() => navigation.navigate('Add')}>
                    <Image
                        style={styles.imgbtn}
                        source={require('../../assets/img/Add.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flex: 2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.themeColor,
        borderBottomRightRadius: 500,
        padding: 20
    },
    contchips: {
        height: 35,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        flexDirection: 'row',
        position: 'relative',
        bottom: 120,
        backgroundColor: colors.fadedwhite,
        borderRadius: 20,
        opacity: 0.7,
    },
    chip: {
        opacity: 2,
        backgroundColor: colors.white,
    },
    h1: {
        fontSize: 24,
        fontWeight: '600',
        color: colors.white,
        position: 'absolute',
        top: 20,
        left: 20
    },
    footer: {
        flex: 1.5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contbtn: {
        height: 60,
        width: 60,
        backgroundColor: colors.themeColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 200,
        position: 'absolute',
        bottom: 35,
        right: 30
    },
    imgbtn: {
        height: 40,
        width: 40
    },
    content: {
        height: 450,
        width: 330,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: colors.white,
        position: 'relative',
        bottom: 220,
        borderRadius: 30,
        padding: 10
    },
    texti: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
    },
    text: {
        fontWeight: 'bold',
        paddingLeft: 5,
        paddingRight: 5
    },
    img: {
        height: 25,
        width: 25,

    },
});

export default Information;