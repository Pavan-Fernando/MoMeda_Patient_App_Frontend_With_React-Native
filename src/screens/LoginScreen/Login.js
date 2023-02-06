import { View, Text, Image, StyleSheet, useWindowDimensions, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../../assets/images/logo.png';
import CustomInputs from '../../components/CustomInputs/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onLogInPressed = async () => {

        try{
            const response = await fetch('http://192.168.1.4:8085/momed/backend/api/v1.0/auth/user/sign-in', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            });
            const json = await response.json();
            const responseType = await response.status;
            if(responseType == 200){
                navigation.navigate('Home');
            }else{
                console.warn(json.message)
            }
        }catch (error){
            console.error(error);
        } 
    }
    const onCreateAccount = () => {
        navigation.navigate('SignIn');
    }
    const onForgetPassword = () => {
        navigation.navigate('ForgotPassword');
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}> 
            <View style={styles.root}>
                <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain" />
            </View>
            <Text style={styles.titleText}>MoMed</Text>
            <CustomInputs 
                placeholder="Email"
                value={email}
                setValue={setEmail}
                secureTextEntry={false}
            />
            <CustomInputs 
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />
            <Pressable onPress={onForgetPassword}>
                <Text style={styles.forgetText}>Forget Your Password?</Text>
            </Pressable>

            <CustomButton btnText="Sign In" onPress={onLogInPressed}/>
            <CustomButton btnText="Don’t have an Account? Create" onPress={onCreateAccount} type="Tertiary"/>
        </View>
    </ScrollView>
    
  )
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
       fontSize: 40,
    },
    forgetText: {
        color: "white",
        fontFamily: "jaldi",
        fontSize: 13,
        marginLeft: 5,
        marginBottom: 30
     }
});

export default Login;