import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
   Haze: {
      iconName: "weather-hail",
      gradient: ["#D3CCE3", "#E9E4F0"]
   },
   Clear: {
      iconName: "weather-sunny",
      gradient: ["#f7797d", "#FBD786", "#C6FFDD"],
      title: "Very clear sky.",
      subtitle: "Go outside and have some fun!"
   },
   Thunderstorm: {
      iconName: "weather-lightning-rainy",
      gradient: ["#283048", "#859398"]
   },
   Drizzle: {
      iconName: "weather-lightning-rainy",
      gradient: ["#bdc3c7", "#2c3e50"]
   },
   Rain: {
      iconName: "weather-lightning-rainy",
      gradient: ["#2C3E50", "#4CA1AF"]
   },
   Snow: {
      iconName: "weather-snowy",
      gradient: ["#A5FECB", "#20BDFF", "#5433FF"]
   },
   Atmosphere: {
      iconName: "weather-lightning-rainy",
      gradient: ["#141E30", "#243B55"]
   },
   Clouds: {
      iconName: "weather-cloudy",
      gradient: ["#bdc3c7", "#2c3e50"]
   },
   Mist: {
      iconName: "weather-hail",
      gradient: ["#606c88", "#3f4c6b"]
   },
   Dust: {
      iconName: "weather-hail",
      gradient: ["#FFEFBA", "#FFFFFF"]
   }
}

export default function Weather({temp, condition}) {
   return <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}>
      
      <StatusBar barStyle="light-content" />

      <View style={styles.halfContainer}>
         <MaterialCommunityIcons
            size={130}
            name={weatherOptions[condition].iconName}
            color="white" />
         <Text style={styles.temp}>{temp}<Text style={styles.oc}> ℃</Text></Text>
      </View>

      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
         <Text style={styles.title}>{weatherOptions[condition].title}</Text>
         <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
   </LinearGradient>
};

Weather.propTypes = {
   temp: PropTypes.number.isRequired,
   condition: PropTypes.oneOf([
      "Thunderstorm",
      "Drizzle",
      "Rain",
      "Snow",
      "Atmosphere",
      "Clear",
      "Clouds",
      "Mist",
      "Dust",
      "Haze"])
      .isRequired
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
   },
   temp: {
      fontSize: 40,
      color: "white"
   },
   oc: {
      fontSize: 33,
      color: "white"
   },
   halfContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
   },
   title: {
      color: "white",
      fontWeight: "600",
      fontSize: 40,
      marginBottom: 10
   },
   subtitle: {
      color: "white",
      fontWeight: "400",
      fontSize: 24,
      marginBottom: 50
   },
   textContainer: {
      paddingHorizontal: 20,
      alignItems: "flex-start"

   }
})