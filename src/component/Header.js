import react from "react";
import { useState} from "react";
import Logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

const Title = () => (
  <img
    className="logo"
    alt="logo"
    src={Logo}
  />
);

const Header = () => {
  const [isLogged, setIsLogged] = useState(true);

 
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
        <li><Link to="/" className="link" >Home</Link></li>
        <li><Link to="/about" className="link" >About</Link></li>
        <li> <Link to="/contact" className="link" >Contact</Link></li>
        <li>Cart</li>
        <li><Link to="/login" className="link">Login</Link></li>
          {/* <li>
            {isLogged ? (
              <button onClick={() => setIsLogged(false)}>Login</button>
            ) : (
              <button onClick={() => setIsLogged(true)}>Logout</button>
            )}
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
