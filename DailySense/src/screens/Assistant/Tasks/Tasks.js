/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import axios from "axios";

import React, { useEffect } from "react";

import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import CardTask from './CardTask';
import Information from '../Information';
//import { arrayTasks } from '../../components/Utils';


const colors = {
  themeColor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3",
  pink: "#D16BA5"
}


const Tasks = ({route, navigation}) => {

  const isFocused = useIsFocused();
  const {id} = route.params;
  const [tasksAsociades, setTasksAsociades] = React.useState([]);
  
  const obtinTasksAsociades = async () => {
    //console.log(id);
    const resultInser = await axios.post('http:52.174.144.160:5000/test?', { op: "getTasks", id: id}).then(response => {
      
      console.log("FUNCIONA");
    
    }).catch(function (error) {
      console.log(error);
    });

    console.log(JSON.stringify(resultInser.data));
    setTasksAsociades(resultInser.data.array);
  }

  useEffect(() => {
    obtinTasksAsociades();
  }, [navigation, isFocused])


  return (
    <View style={styles.cont}>
      <StatusBar barStyle="light-content" backgroundColor={colors.tint} />
      <View style={styles.header}>
        <Text style={styles.titulo}>Tasks</Text>
      </View>
      <View style={styles.body}>
        <ScrollView>
        {tasksAsociades.map((element, pos) => {
            return (<CardTask key={pos} id={element.IdAtributte} name={element.Name} 
              descrition={element.Description} date={element.Date} ></CardTask>);
          })}
          {/* {arrayTasks.map((element,pos)=>{
            console.log("añado reminder");
            return(
              
              <CardTask key={pos} desc={element.description} title={element.title} IdDependents={element.IdDependents}></CardTask>
            )
          })} */}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Button
          mode='contained'
          color={colors.background}
          labelStyle={{ width: 120 }}
          onPress={() => navigation.goBack()}
        >
          Home
        </Button>
        <Button
          mode='outlined'
          color={colors.white}
          style={styles.btnout}
          labelStyle={{ width: 75 }}
          onPress={() => navigation.navigate('AddTask')}
        >
          Add
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: colors.tint
  },
  header: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 3,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row'
  },
  titulo: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    letterSpacing: 2
  },
  contbtn: {
    height: 50,
    width: 170,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200,
  },
  imgbtn: {
    height: 40,
    width: 40
  },
  btnout: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.white,
    borderwidth: 1,
  },
});

export default Tasks;
