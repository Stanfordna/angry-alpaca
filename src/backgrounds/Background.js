import './Background.css';
import APOD from './APOD';
import SkyBox from './SkyBox';

const Components = {
  'APOD'   : <APOD />,
  'SkyBox' : <SkyBox />
}

function Background(props) {

    let selection = props['identifier'];
    console.log("Attempting to insert Background Component: " + props['identifier']);
    if (Components[selection] !== "undefined") {
      return (   
        <app-background>
          {Components[selection]}
        </app-background>
      );
    }

    // default
    return (   
      <app-background>
        <APOD />
      </app-background>
    );
}

export default Background;
