/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import { TextInput, Button, Chip } from 'react-native-paper';

const Account = () => {

    return (
        <View style={styles.cont}>
            <View style={styles.content}>
                <Image
                    source={require('../../assets/img/logo1.png')}
                    style={styles.imagen}
                />
                <Text style={{ fontSize: 25, color: "black" }}>Account</Text>
                <View style={styles.acc}>
                    <View style={{flexDirection:"row"}}>
                        <Text>Username: </Text>
                        <Text>Nombre</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <Text>Mail: </Text>
                        <Text>Mail</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <Text>Sex: </Text>
                        <Text>Sex</Text>
                    </View>
                </View>
                <TextInput
                    placeholder='Username'
                    style={styles.box}
                    label='Username'
                    selectionColor='#99c8de'
                    mode='outlined'
                    value={User}
                    onChangeText={User => setUser(User)}
                    theme={{ colors: { primary: '#99c8de' } }}
                />
                <TextInput
                    placeholder='Password'
                    style={styles.box}
                    mode='outlined'
                    label='Password'
                    selectionColor='#99c8de'
                    value={Password}
                    onChangeText={Password => setPassword(Password)}
                    secureTextEntry={true}
                    theme={{ colors: { primary: '#99c8de' } }}
                />
                <TextInput
                    placeholder='Confirm Password'
                    style={styles.box}
                    mode='outlined'
                    label='Confirm Password'
                    selectionColor='#99c8de'
                    value={ConfirmPassword}
                    onChangeText={ConfirmPassword => setConfirmPassword(ConfirmPassword)}
                    secureTextEntry={true}
                    theme={{ colors: { primary: '#99c8de' } }}
                />
                <View style={styles.contchips}>
                    <Chip style={styles.chip} >Male</Chip>
                    <Chip style={styles.chip} >Female</Chip>
                    <Chip style={styles.chip} >Other</Chip>
                </View>
                <Button
                    labelStyle={{ color: 'white' }}
                    mode='contained'
                    color='#99c8de'
                    style={{ position: "absolute", bottom: 40 }}
                >
                    Create Account
          </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: '#99c8de',
        opacity: 0.98,
        justifyContent: 'center',
        alignItems: 'center',
    },
    acc:{
        flex:1,
        
    },
    content: {
        flex: 0.8,
        width: '85%',
        backgroundColor: '#f7f7f7',
        borderRadius: 8,
        flexDirection: 'column',
        alignItems: 'center',
        padding: "2%"
    },
    imagen: {
        height: "20%",
        width: "30%",

    },
    box: {
        height: 45,
        width: 250,
        margin: 10,
    },
    titulo: {
        fontSize: 20
    },
    contchips: {
        width: 250,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 15,
    },
    chip: {
        padding: 1
    }
});

export default Account;