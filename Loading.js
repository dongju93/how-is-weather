import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading() {
   return <View style={styles.container}>
      <Text style={styles.text}>Getting your location weather data</Text>
   </View>
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "flex-end",
      paddingHorizontal: 40,
      paddingVertical: 200,
      backgroundColor: '#fdf6aa'
   },
   text: {
      color: '#2c2c2c',
      fontSize: 30
   }
})