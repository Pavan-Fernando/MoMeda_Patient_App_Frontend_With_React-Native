import { View, Text, StyleSheet, Pressable, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, btnText, type = "Primary", image = null }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
          <Image
            source={image} 
            style={[styles[`ImageIconStyle_${type}`]]}
          />
          <Text style={[styles[`text_${type}`]]}>{btnText}</Text>
      </TouchableOpacity>
        {/* <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
          <Text style={[styles[`text_${type}`]]}>{btnText}</Text>
        </Pressable> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      // width: '100%',
      padding: 15,
      marginVertical: 10,
      borderRadius: 10,
  },
  container_ImageRight: {
    width: 160,
    height:160,
    backgroundColor: "gray",
    opacity: 0.8,
  },
  container_ImageLeft: {
    width: 160,
    height:160,
    backgroundColor: "gray",
    opacity: 0.8,
    alignSelf: "flex-end",
    marginTop: -169,
  },
  container_Primary: {
    width: '100%',
    backgroundColor: '#457AB4',
    alignItems: 'center',
  },
  container_Tertiary: {
    width: '100%',
    alignItems: 'center',
  },
  text_Primary: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 18,
  },
  text_Tertiary: {
    color: 'white',
    fontSize: 13,
},
  ImageIconStyle_ImageRight: {
  width: 120,
  height: 110,
  alignSelf: "center"
},
  ImageIconStyle_ImageLeft: {
    width: 120,
    height: 110,
    alignSelf: "center"
},
 text_ImageRight: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    alignSelf: "center"
 },
 text_ImageLeft: {
  fontWeight: 'bold',
  color: 'white',
  fontSize: 18,
  alignSelf: "center"
},
 
});


export default CustomButton