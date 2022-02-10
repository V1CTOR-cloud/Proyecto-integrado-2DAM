import React from "react";
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
import { TextInput, Button, Chip, HelperText } from "react-native-paper";


const colors = {
    themeColor: "#4263ec",
    white: "#fff",
    background: "#f4f6fc",
    greyish: "#a4a4a4",
    tint: "#2b49c3"
}

const CreateAccount = ({ navigation }) => {

    const [Password, setPassword] = React.useState("");
    const [ConfirmPassword, setConfirmPassword] = React.useState("");
    const [User, setUser] = React.useState("");
    const [MailAccount, setMailAccount] = React.useState("");

    const [Sexo, setSexo] = React.useState("Male");
    const [SelectedChipMale, selectedChipMale] = React.useState(false);
    const [SelectedChipFemale, selectedChipFemale] = React.useState(false);
    const [SelectedChipOther, selectedChipOther] = React.useState(false);

    const estableixSexe = (sexe) => {
        if (sexe === 'Male') {
            selectedChipMale(!SelectedChipMale);
            selectedChipFemale(false);
            selectedChipOther(false);
        } else if (sexe === 'Female') {
            selectedChipFemale(!SelectedChipFemale);
            selectedChipMale(false);
            selectedChipOther(false);
        }
        else if (sexe === 'Other') {
            selectedChipOther(!SelectedChipOther);
            selectedChipMale(false);
            selectedChipFemale(false);
        }

        setSexo(sexe);
    }



    const [datos, setDatos] = React.useState([]);
    const post = "[{user: " + User + ", pass: " + Password + ", mail: " + MailAccount + "}]";

    const postDatos = async () => {
        const res = await axios.post('http:direccion_api_a_llamar', { post });
        setDatos(res.data.items);
        console.log(datos);
    }

    const next = () => {
        navigation.navigate("Login")

    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
            <View style={styles.header}>
                <Text style={styles.h1}>Register Now!</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.form}>
                    <View style={styles.texti}>
                        <Image
                            style={styles.img}
                            source={require('../../assets/img/mail.png')}
                        />
                        <TextInput
                            placeholder='Your Email goes here...'
                            style={styles.box}
                            label='Email'
                            mode='outlined'
                            value={MailAccount}
                            onChangeText={MailAccount => setMailAccount(MailAccount)}
                            theme={{ colors: { primary: colors.tint } }}
                        />
                    </View>
                    <View style={styles.texti}>
                        <Image
                            style={styles.img}
                            source={require('../../assets/img/user.png')}
                        />
                        <TextInput
                            placeholder='Your Username goes here...'
                            style={styles.box}
                            label='Username'
                            mode='outlined'
                            value={User}
                            onChangeText={User => setUser(User)}
                            theme={{ colors: { primary: colors.tint } }}
                        />
                    </View>
                    <View style={styles.texti}>
                        <Image
                            style={styles.img}
                            source={require('../../assets/img/lock.png')}
                        />
                        <TextInput
                            placeholder='Your Password goes here...'
                            style={styles.box}
                            label='password'
                            mode='outlined'
                            secureTextEntry={true}
                            onChangeText={Password => setPassword(Password)}
                            secureTextEntry={true}
                            theme={{ colors: { primary: colors.tint } }}
                        />
                    </View>
                    <View style={styles.texti}>
                        <Image
                            style={styles.img}
                            source={require('../../assets/img/lock.png')}
                        />
                        <TextInput
                            placeholder='Confirm your password'
                            style={styles.box}
                            label='Confirm password'
                            mode='outlined'
                            secureTextEntry={true}
                            value={ConfirmPassword}
                            onChangeText={ConfirmPassword => setConfirmPassword(ConfirmPassword)}
                            theme={{ colors: { primary: colors.tint } }}

                        />
                    </View>
                    
                    <View style={styles.contchips}>
                        <Chip style={styles.chip} selected={SelectedChipMale} onPress={() => estableixSexe('Male')} >Male</Chip>
                        <Chip style={styles.chip} selected={SelectedChipFemale} onPress={() => estableixSexe('Female')} >Female</Chip>
                        <Chip style={styles.chip} selected={SelectedChipOther} onPress={() => estableixSexe('Other')}>Other</Chip>
                    </View>
                </View>

                <Button
                    mode='contained'
                    color={colors.themeColor}
                    style={styles.btn}
                    onPress={() => next}
                    labelStyle={{ color: colors.white }}
                >
                    Register
                </Button>
                <View style={styles.context}>
                    <Text>Developed by DailySense Team</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.themeColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    texti: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
    },
    img: {
        height: 20,
        width: 20,
    },
    h1: {
        fontSize: 25,
        fontWeight: 'bold',
        position: 'relative',
        left: 30,
        color: colors.white
    },
    content: {
        flex: 5,
        width: '100%',
        backgroundColor: colors.white,
        borderRadius: 40,
        position: 'relative',
        top: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        flex: 0.4,
        width: '85%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'relative',
        bottom: 130,
    },
    box: {
        height: 45,
        margin: 15,
        width: 250,
    },
    btn: {
        height: 45,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: 20
    },
    contchips: {
        height: 30,
        width: '70%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        position: 'relative',
        top: 60
    },
    chip: {
        padding: 1
    },
    context: {
        height: 20,
        position: 'relative',
        top: 80
    },
});

export default CreateAccount;