import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const about = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>about</Text>
    </View>
  )
}

export default about

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#25292e",
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        color:"#fff",
        fontSize:29,
        fontWeight:"bold"
    },button:{
    fontSize:20,
    textDecorationLine: 'underline',
    color: '#fff'
  },
})