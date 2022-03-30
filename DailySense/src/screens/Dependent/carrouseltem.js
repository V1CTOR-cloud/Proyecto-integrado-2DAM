import React from 'react'
import {View, StyleSheet, Text, Image, Dimension} from 'react-native';

const { width, height} = Dimension.get('window');

const CarrouselItem = ({item}) => {
    return (
        <View>
            <Image/>
            <View>
                <Text>Tittle</Text>
                <Text>Description</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardView:{
        flex: 1,
        width: width -20,
        height: height / 3,
        
    }
});
  
export default CarrouselItem;