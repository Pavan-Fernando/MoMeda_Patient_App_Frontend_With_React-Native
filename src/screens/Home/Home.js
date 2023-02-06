import { View, Text, StyleSheet, ScrollView, Image, useWindowDimensions } from 'react-native';
import React from 'react';
import Logo from '../../../assets/images/logo.png';
import CustomButton from '../../components/CustomButton/CustomButton';

const Home = () => {
  const {height} = useWindowDimensions();

  const onLogInPressed = () => {}

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <View style={styles.root}>
                <Image source={Logo} style={[styles.logo, {height: height * 0.15}]} resizeMode="contain" />
                <Text style={styles.titleText}>MoMed</Text>
            </View>
            <View style={styles.wraper}>
                <CustomButton 
                  btnText="Pharmacy" 
                  onPress={onLogInPressed}
                  type="ImageRight"
                  image={Logo}
                />
                <CustomButton 
                  btnText="E-Chenneling" 
                  onPress={onLogInPressed}
                  type="ImageLeft"
                  image={Logo}
                />
                <CustomButton 
                  btnText="Medical History" 
                  onPress={onLogInPressed}
                  type="ImageRight"
                  image={Logo}
                />
                <CustomButton 
                  btnText="Profile" 
                  onPress={onLogInPressed}
                  type="ImageLeft"
                  image={Logo}
                />
            </View>
        </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
      padding: 20,
  },
  root: {
      alignItems: 'center',
      paddingTop: 30,
  },
  logo: {
      width: '80%',
      maxWidth: 350,
     maxHeight: 250
  },
  titleText: {
     color: "white",
     fontFamily: "jaldi",
     fontSize: 32,
     marginBottom: 25,
  },
  forgetText: {
      color: "white",
      fontFamily: "jaldi",
      fontSize: 13,
      marginLeft: 5,
      marginBottom: 30
   },
   wraper: {
    backgroundColor: "white",
    opacity: 0.8,
    width: "100%",
    height: "65.5%",
    paddingHorizontal: 10,
    paddingTop: 10,
    borderRadius: 10,
   }
});

export default Home;