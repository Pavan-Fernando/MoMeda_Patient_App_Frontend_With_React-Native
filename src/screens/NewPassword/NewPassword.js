import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import CustomInputs from '../../components/CustomInputs/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const NewPassword = () => {
    const [userPassword, setUserPassword] = useState('');
    const [userNewPasswod, setUserNewPasswod] = useState('');

    const onSendEmail = () => {
    
    }
    const onLogInPressed = () => {
    
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
         <View style={styles.container}>
            <View style={styles.root}>
                <Text style={styles.titleText}>Reset Your Password</Text>
            </View>
                <CustomInputs 
                    placeholder="Current Password"
                    value={userPassword}
                    setValue={setUserPassword}
                />
                <CustomInputs 
                    placeholder="New Password"
                    value={userNewPasswod}
                    setValue={setUserNewPasswod}
                />
                <CustomButton 
                    btnText="Confirmed"
                    onPress={onSendEmail}
                />
                <CustomButton 
                    btnText="Back to Log in"
                    onPress={onLogInPressed}
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

export default NewPassword;