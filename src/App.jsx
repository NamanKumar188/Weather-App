import SearchBar from './searchBar.jsx';
import weatherdata from './WeatherData.jsx';
import { useState } from 'react';
import './styles.css';
import Line from './line.jsx';
import IconPlate from './iconPlate.jsx';
import Details from './detailbar.jsx';


function App() {
  var [weatherData, setWeatherData] = useState('');
  var [location, setLocation] = useState('');
  const getSearchText = async (searchText) => {
    var response = await weatherdata(searchText);
    setLocation(searchText);
    setWeatherData(response);
  };
  if(!weatherData.mainWeather) {
    getSearchText('Delhi');
  }
  return (
    <div className="back">
      <div className="mainbox">
        <div className="left" ></div>

        <div className="right">
          <IconPlate mainWeather={weatherData.mainWeather} />

          <div className="wname">
            <h3>{weatherData.mainWeather}</h3>
          </div>
          <Line thickness="2px" opacity="100%" />
          {/* <div className="searchBox">
            <SearchBar getSearchText={getSearchText} />
            <img className="searchIcon" src={icon} alt="not found" />
          </div> */}
          <SearchBar getSearchText={getSearchText} />
          <Line thickness="0.8px" opacity="60%" length="70%" pos="1%" />
          <div class="placeName">{location}</div>
          <Line thickness="1.4px" opacity="1" length="100%" />
          <Details left="Description" right={weatherData.description} />
          <Line thickness="2px" length="100%" opacity="20%" />
          <Details left="Temperature" right={weatherData.temperature} />
          <Line thickness="2px" length="100%" opacity="20%" />

          <Details left="Feels Like" right={weatherData.feels_like} />
          <Line thickness="2px" length="100%" opacity="20%" />
          <Details left="Humidity" right={weatherData.humidity} />
          <Line thickness="2px" length="100%" opacity="20%" />
          <Details left="Pressure" right={weatherData.pressure} />
          <Line thickness="2px" length="100%" opacity="20%" />
          <Details left="Visibility" right={weatherData.visibility} />
          <Line thickness="2px" length="100%" opacity="20%" />
          <Details left="Wind Speed" right={weatherData.windSpeed} />
          <Line thickness="2px" length="100%" opacity="20%" />
          <Details left="Wind Direction" right={weatherData.windDirection} />
        </div>
      </div>
    </div>
  );
}

export default App;
