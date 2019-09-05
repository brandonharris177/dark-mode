import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {             
  // const [darkMode, setDarkMode] = useState(false); //
  const [darkMode, setDarkMode] = useDarkMode(false);//this calls the useDarkMode hook and sets the inital value to false (Dark mode off)
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);//this is a switch, if darkmode is on it turns it off, if it is off it turns it on
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}//flips the switch
          className={darkMode ? 'toggle toggled' : 'toggle'}//if dark mode is on turn it off its its off turn it on
        />
      </div>
    </nav>
  );
};

export default Navbar;
