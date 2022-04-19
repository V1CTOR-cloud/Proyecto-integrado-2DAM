import React from "react";

import { NativeBaseProvider, 
    Box,
    Input, 
    Icon, 
    Stack,
    Button, 
} from "native-base";

import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from 'react-native';



const Example = () => {
    const [show, setShow] = React.useState(false);
    const [nombre, setNombre] = useState('');
    const [pass, setPass] = useState('');
    return <Stack space={4} w="100%" alignItems="center">
        <Input w={{
        base: "75%",
        md: "25%"
      }}
       InputLeftElement={<Icon as={<MaterialIcons name="person" />}
       size={5}
       ml="2"
       color="muted.400"
       />} 
       placeholder="Name"
       value={nombre}
       onChangeText={nombre => setNombre(nombre)}
      />
        <Input
        secureTextEntry
        w={{
        base: "75%",
        md: "25%"
      }} type={show ? "text" : "password"}
      InputRightElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
      size={5}
       mr="2"
        color="muted.400"
        onPress={() => setShow(!show)} />}
        placeholder="Password"
        value={pass}
        onChangeText={pass => setPass(pass)}
        />
      </Stack>;
  };


function Login({navigation}) {
    const [user, setUser] = useState('');
    const [pass, setPassword] = useState('');

    const [show, setShow] = React.useState(false);
    return ( 
        <NativeBaseProvider>
        <Box style={styles.container}>
            <Example />
            <Box style={styles.contbutton}>
                <Button variant="outline" colorScheme="success"
                style={styles.button}
                onPress={() => navigation.navigate('Registro')}
                >
                    Registrarse
                </Button>
                <Button  colorScheme="success"
                style={styles.button1}
                >
                    Iniciar sesión
                </Button>
            </Box>
        </Box>
        </NativeBaseProvider>
     );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    contbutton:{
        
    },
    button:{
        position: 'relative',
        top: 100
    },
  });


export default Login;