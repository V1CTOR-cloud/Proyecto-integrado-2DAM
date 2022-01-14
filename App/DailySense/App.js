/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useRef, useEffect} from 'react';
 import {
   SafeAreaView,
   Image,
   Text,
   View,
   StyleSheet,
   Dimensions,
   Animated,
 } from 'react-native';




const App: () => React$Node = () => {
  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: Dimensions.get('window').width / 1.6,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnim, {
      duration: 2000,
      toValue: 1,
      delay: 2000,
      useNativeDriver: false,
    }).start();
  }, [moveAnim, fadeAnim]);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Animated.Image
          style={[styles.image, {opacity: fadeAnim}]}
          source={require('./img/logo_simplificado_PNG.png')}
        />
        <Animated.View style={[styles.logoContainer, {marginLeft: moveAnim}]}>
          <Text style={[styles.logoText]}>D</Text>
          <Animated.Text style={[styles.logoText, {opacity: fadeAnim}]}>
            ailySense
          </Animated.Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
  },
  logoText: {
    fontSize: 35,
    marginTop: -20,
    color: '#444444',
    fontWeight: '300',
  },
  contentContainer: {
    top: '25%',
    alignItems: 'center',
  },
  image: {
    width: 275,
    height: 275,
  },
  logoContainer: {
    flexDirection: 'row',
  },
});

export default App;
