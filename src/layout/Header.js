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
        <header-contact>
          CONTACT
        </header-contact>
        <header-envelope 
          style={{ backgroundImage: `url(${envelope})` }} >
          <Button
            href="https://google.com" />
        </header-envelope>
      </site-header>
    );
}

export default Header;