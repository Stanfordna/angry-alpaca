import './Header.css';
import { Button } from '@react-email/button';
import { Html } from '@react-email/html';
import envelope from '../images/envelope.png';

function Header() {
    return (
      <site-header>
        <header-title>
          <code>{"NicholasStanford"}</code>
        </header-title>
        <header-spacer />
        <header-contact
          onClick={(e) => {
            window.location.href = "mailto:stanfordnas@gmail.com";
            e.preventDefault();
          }}>
          CONTACT
        </header-contact>
        <header-envelope 
          style={{ backgroundImage: `url(${envelope})` }}
          onClick={(e) => {
            window.location.href = "mailto:stanfordnas@gmail.com";
            e.preventDefault();
          }} />
      </site-header> 
    );
}

export default Header;