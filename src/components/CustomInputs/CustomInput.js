import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';

const CustomInputs = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View>
        <View style={styles.container}>
            <TextInput 
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                style={styles.inputs} 
             />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 10,  
    },
    inputs: {
        backgroundColor: "white",
        width: "100%",
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
    }
});

export default CustomInputs;