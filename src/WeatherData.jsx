import axios from 'axios';
const getWindDirection = (deg) => {
  if (deg > 337.5 || deg <= 22.5) return 'North';
  if (deg <= 67.5) return 'North-east';
  if (deg <= 112.5) return 'East';
  if (deg <= 157.5) return 'South-east';
  if (deg <= 202.5) return 'South';
  if (deg <= 247.5) return 'South-west';
  if (deg <= 292.5) return 'West';
  if (deg <= 337.5) return 'North-west';
  return 'N/A'; // Default case
};
const WeatherData = async (location) => {
  var apiKey = 'fa69e216cbf9a74f4a1d57ef4fbb38d0';
  console.log(location);
  var response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
  );
  // console.log(response);
  const data = response.data;
  const weatherData = {
    temperature: Math.round(data.main.temp - 273.15).toString() + '°C',
    feels_like: Math.round(data.main.feels_like - 273.15).toString() + '°C',
    humidity: data.main.humidity.toString() + '%',
    pressure: data.main.pressure.toString() + ' hPa',
    cloudiness: data.clouds.all,
    visibility: data.visibility,
    mainWeather: data.weather[0].main,
    description: data.weather[0].description,
    windDirection: getWindDirection(data.wind.deg),
    windSpeed: `${data.wind.speed} m/s`,
  };
  console.log(weatherData);
  return weatherData;
};
export default WeatherData;
