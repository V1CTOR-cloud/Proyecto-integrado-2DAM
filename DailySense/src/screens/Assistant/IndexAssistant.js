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
import { TextInput, Button } from "react-native-paper";


const colors = {
    themeColor: "#4263ec",
    white: "#fff",
    background: "#f4f6fc",
    greyish: "#a4a4a4", 
    tint: "#2b49c3"
}


const IndexAssistant = ({navigation}) => {

    const [User, setUser] = React.useState("");
    const [Password, setPassword] = React.useState("");
    const [Val, setVal] = React.useState("");

    return ( 
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={colors.themeColor}/>
            <View style={styles.header}>
                <View style={styles.headercontext}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/img/feather.png')}
                    />
                    <Text style={styles.h2}>
                        Welcome 
                    </Text>
                    <Text style={styles.h1}>
                        Víctor 
                    </Text>
                </View>
                <View style={styles.contimg}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/img/Dependiente.png')}
                    />
                </View>
            </View>
            <View style={styles.content}>

            </View>
            <View style={styles.footer}>
                <Image
                    source={require('../../assets/img/Add.png')}
                    style={styles.imgbtn}
                />
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: colors.white,
      justifyContent: 'center',
      alignItems: 'center'
  },
  header: {
    flex: 1.6,
    width: '110%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: colors.themeColor,
    borderRadius: 100,
    position: 'relative',
    bottom: 40,
  },
  img:{
    height: 40,
    width: 40,
    position: 'relative',
    top: 40
  },
  headercontext: {
    height: 100,
    width: 200,
    justifyContent: 'center',
    position: 'relative',
    left: 50,
    top: 30,
    flexDirection: 'column'
  },
  h1: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.white,
    position: 'relative',
    left: 60
  },
  h2: {
    fontSize: 18,
    fontWeight: '300',
    color: colors.white,
    position: 'relative',
    left: 60
  },
  contimg: {
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.white,
    position: 'relative',
    left: 300,
    bottom: 50,
    borderRadius: 100
  },
  logo:{
    height: 65,
    width: 60,
  },
  content: {
    flex: 4,
    width: '100%',
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 0.8,
    width: '100%',
    backgroundColor: colors.greyish,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgbtn: {
    height: 65,
    width: 65
  }
});
 
export default IndexAssistant;