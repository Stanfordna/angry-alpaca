import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Background from './backgrounds/Background';
import Header from './layout/Header'
import Experience from './layout/Experience'

const background = "APOD"

function App() {
  return (
    <Router>
      <app-canvas>
        <Background identifier={background}/>
        <Header />
        <site-body>
          <Experience />
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </site-body>
      </app-canvas>
    </Router>
  );
}

export default App;
