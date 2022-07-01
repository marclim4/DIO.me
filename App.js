import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

import imageOff from '\assets\icons\lampada off.png'
import imageOn from '\assets\icons\lampada acesa.png'
import dioWhite from '\assets\icons\diome-white.png'
import dioColor from '\assets\icons\logo-colorida acesa.png'

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = ()=> setToggle(oldToggle => !oldToggle);

  useEffect(() => {
   Torch.switchState(toggle);
     }, [toggle]);
  
  useEffect(()=>{
    const subscription = RNShake.addListener(()=>{
    handleChangeToggle(oldToggle => !oldToggle)
    });
    return () => subscription.remove();
  },[]);

  return (
  <View style ={toggle ? style.containerLight :   style.container }>
  <TouchableOpacity onPress = {handleChangeToggle}>
  <Image 
  style={toggle ? style.lightingOn : style.lightingOff} 
  source={toggle ? imageOn : imageOff}
  />

<Image 
  style={styleLogo} 
  source={toggle ? dioColor : dioWhite}
  />
</TouchableOpacity>
  </View>,
  );
};

export default App;

const style = StyleSheet.create({
container:{
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight:{
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  }
  lightingOff:{
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColar: 'white',
    width: 150,
    height: 150,
  }

  styleLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});