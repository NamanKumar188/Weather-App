
import './iconPlate.css';
import Sunny from './icons/sunny.jsx';
import Cloudy from './icons/cloudy.jsx';
import Drizzle from './icons/drizzle.jsx';
import Dust from './icons/dust.jsx';
import Fog from './icons/fog.jsx';
import Haze from './icons/haze.jsx';
import Mist from './icons/mist.jsx';
import Rain from './icons/rain.jsx';
import Snow from './icons/snow.jsx';
import Smoke from './icons/smoke.jsx';
import Thunderstorm from './icons/thunderstorm.jsx';

function IconPlate({mainWeather}) {
  switch (mainWeather) {
    case 'Clear':
      return <Sunny />;
    case 'Clouds':
      return <Cloudy />;
    case 'Rain':
      return <Rain />;
    case 'Thunderstorm':
      return <Thunderstorm />;
    case 'Drizzle':
      return <Drizzle />;
    case 'Snow':
      return <Snow />;
    case 'Mist':
      return <Mist />;
    case 'Smoke':
      return <Smoke />;
    case 'Haze':
      return <Haze />;
    case 'Dust':
      return <Dust />;
    case 'Fog':
      return <Fog />;
    default:
      return null; // Handle unknown weather conditions or add a fallback
  }
}

export default IconPlate;
