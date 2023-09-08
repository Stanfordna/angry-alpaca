import './SkyBox.css';
import logo from './assets/logo.svg';

function SkyBox() {
    return (
      <sky-box>
        <star-origin>
            <img src={logo} className="star" alt="logo" />
        </star-origin>
      </sky-box>
    );
}

export default SkyBox;