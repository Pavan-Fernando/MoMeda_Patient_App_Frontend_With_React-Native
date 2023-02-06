import { View, Text, Image, StyleSheet, useWindowDimensions, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../../assets/images/logo.png';
import CustomInputs from '../../components/CustomInputs/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onCreateAccount = () => {
        console.warn("Logged In");
    }
    const onLogInPressed = () => {
        navigation.navigate('Login');
    }
    
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}> 
            <View style={styles.root}>
                <Text style={styles.titleText}>Create an Account</Text>
            </View>
            <CustomInputs 
                placeholder="Username"
                value={username}
                setValue={setUsername}
                secureTextEntry={false}
            />
            <CustomInputs 
                placeholder="Email"
                value={email}
                setValue={setEmail}
                secureTextEntry={false}
            />
            <CustomInputs 
                placeholder="Mobile"
                value={phone}
                setValue={setPhone}
                secureTextEntry={false}
            />
            <CustomInputs 
                placeholder="Address"
                value={address}
                setValue={setAddress}
                secureTextEntry={false}
            />
            <CustomInputs 
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />
            <CustomInputs 
                placeholder="Confirmed a Password"
                value={rePassword}
                setValue={setRePassword}
                secureTextEntry={true}
            />
            <View>
                <Text style={styles.forgetText}></Text>
            </View>

            <CustomButton btnText="Create" onPress={onCreateAccount}/>
            <CustomButton btnText="Have an Account? Log In" onPress={onLogInPressed} type="Tertiary"/>
        </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
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
       fontSize: 28,
       alignContent: 'center',
    },
    forgetText: {
        marginBottom: 15
     }
});

export default Login;