// import icon from './images/clouds.png';
import icon from '../images/sunny.svg';

import '../iconPlate.css';

function IconPlate() {
  return (
    <div className="outer">
      <img className="inImage" id="rotate" src={icon} alt="not found" />
    </div>
  );
}

export default IconPlate;
