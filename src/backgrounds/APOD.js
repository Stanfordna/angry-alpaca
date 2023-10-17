import './APOD.css';
import apod from './assets/apod.jpg'

function APOD() {
    return (
      <apod-container>
        <img src={apod} id="img-apod" alt="NASA Astronomy pic of the Day"/>
      </apod-container>
    );
}

export default APOD;