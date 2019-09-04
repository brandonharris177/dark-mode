import React, {useState, useEffect} from 'react';
import useLocalStorage from './useLocalStorage'

const useDarkMode = (darkModeEnabler) => {
    const [darkMode, setDarkMode] = useLocalStorage( 'dark-mode', darkModeEnabler); //this passes the Local storage the key of 'dark-mode' and the itialValue of darkModeEnabler
    useEffect(() => {//this says if dark-mode is already a class remove it, if it is not a class add it
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode])

    return [darkMode, setDarkMode];

  };

  export default useDarkMode