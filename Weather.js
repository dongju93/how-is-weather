import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
   Haze: {
      onoff: false,
      iconName: "weather-hail",
      gradient: ["#D3CCE3", "#E9E4F0"],
      title: "Hazzy day.",
      subtitle: "Feel so board, didn't you?"
   },
   Clear: {
      onoff: true,
      iconName: "md-sunny",
      gradient: ["#f7797d", "#FBD786", "#C6FFDD"],
      title: "Very clear sky.",
      subtitle: "Go outside and have some fun!"
   },
   Thunderstorm: {
      onoff: true,
      iconName: "ios-thunderstorm",
      gradient: ["#283048", "#859398"],
      title: "Thunder feel the thunder.",
      subtitle: "Lightning then the thunder"
   },
   Drizzle: {
      onoff: false,
      iconName: "weather-rainy",
      gradient: ["#bdc3c7", "#2c3e50"],
      title: "Little bit drizzle out there.",
      subtitle: "Friday morning feels"
   },
   Rain: {
      onoff: true,
      iconName: "ios-rainy",
      gradient: ["#2C3E50", "#4CA1AF"],
      title: "Rainy day.",
      subtitle: "Sound really good"
   },
   Snow: {
      onoff: true,
      iconName: "md-snow",
      gradient: ["#A5FECB", "#20BDFF", "#5433FF"],
      title: "SNOW!! OWW!! WEE!!",
      subtitle: "Do you wanna build a snow man?"
   },
   Atmosphere: {
      onoff: true,
      iconName: "md-rainy",
      gradient: ["#141E30", "#243B55"],
      title: "Sorry.",
      subtitle: "We didn't expect that :("
   },
   Clouds: {
      onoff: false,
      iconName: "weather-cloudy",
      gradient: ["#bdc3c7", "#2c3e50"],
      title: "Some clouds over there.",
      subtitle: "Take a breath and chillout"
   },
   Mist: {
      onoff: false,
      iconName: "weather-fog",
      gradient: ["#606c88", "#3f4c6b"],
      title: "Mist over there.",
      subtitle: "Watch your foot steps!"
   }
}

export default function Weather({temp, condition, winds, names}) {
   return <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}>
      
      <StatusBar barStyle="light-content" />

      <View style={styles.halfContainer}>

         {weatherOptions[condition].onoff ?
            <Ionicons
               size={130}
               name={weatherOptions[condition].iconName}
               color="white" /> :
            <MaterialCommunityIcons
               size={130}
               name={weatherOptions[condition].iconName}
               color="white" />}
         <Text style={styles.temp}>{temp}<Text style={styles.oc}> ℃</Text></Text>
         <Text style={styles.oc}>
            <MaterialCommunityIcons size={30} name="weather-windy" color="white" />
            {winds} m/s</Text>
         <Text style={styles.oc}>
            <MaterialCommunityIcons size={30} name="map-marker" color="white" />
            {names}</Text>
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