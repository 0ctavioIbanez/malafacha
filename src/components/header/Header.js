import React, {useState} from 'react';
import './header.css';

const Header = () => {
  const [timer, setTimer] = useState(false);

  setTimeout( () => {
    setTimer(true);
  }, 2000);

  return (
    <div className="header">
      {timer
        ? <div className="cover-header animate fade-in fast"> <h1 className="font-1 titulo-portada">Bienvenidos a malafacha</h1> </div>
        : null
      }
    </div>
  );
}

export default Header;
