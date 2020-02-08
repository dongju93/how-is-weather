import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "8aa4f1e843782e69189cb87cd8c7070d";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async(latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    this.setState({
      isLoading: false, condition: weather[0].main,
      temp
    })
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      // send to API and get data

      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("We can't find your location :(", "Oh, no.")
    }
  };

  componentDidMount() {
    this.getLocation();
  };

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />
  };
}
