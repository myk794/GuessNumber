import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function CustomButton({children, onPress}) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={({pressed}) => pressed ? [styles.button,styles.buttonPressed] 
      : styles.button}
      onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
      
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer:{
    margin: 5,
  },
  buttonText:{
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  button:{
    paddingVertical: 8,
  },
  buttonPressed:{
    opacity: 0.5,
  },
})