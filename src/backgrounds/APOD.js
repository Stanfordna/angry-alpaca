import './APOD.css';
import apod from './assets/apod.jpg';
import { useEffect } from 'react';
// import * as fs from 'node:fs';
const date = new Date((new Date()).valueOf() - 1000*60*60*24).toISOString().slice(0,10).replace(/-/g, '');
 // yesterday's date formatted as YYYYMMDD
var fetchNewAPOD = true;

function APOD() {

    useEffect(() => {
        if (fetchNewAPOD) {
            fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                console.log(apod);
                fetchNewAPOD = false;
            })
            .catch((error) => {
                console.log(error.message);
            });
        }
    })



    return (
      <apod-container>
        <img src={apod} id="img-apod" alt="NASA Astronomy pic of the Day"/>
      </apod-container>
    );
}

export default APOD;