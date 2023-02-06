import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import CustomInputs from '../../components/CustomInputs/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
    const [userEmail, setUserEmail] = useState('');
    const navigation = useNavigation();


    const onSendEmail = () => {
    
    }
    const onBackToLogin = () => {
        navigation.navigate('Login');
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
         <View style={styles.container}>
            <View style={styles.root}>
                <Text style={styles.titleText}>Reset Your Password</Text>
            </View>
                <CustomInputs 
                    placeholder="Please enter your Email Address"
                    value={userEmail}
                    setValue={setUserEmail}
                />
                <CustomButton 
                    btnText="Send"
                    onPress={onSendEmail}
                />
                <CustomButton 
                    btnText="Back to Sign in"
                    onPress={onBackToLogin}
                    type="Tertiary"
                />
           
         </View>
    </ScrollView>
   
  )
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 20,
    },
    root: {
        alignItems: 'center',
        paddingTop: 30,
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

export default ForgotPassword;