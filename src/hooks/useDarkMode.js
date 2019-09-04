import React, {useState, useEffect} from 'react';
import useLocalStorage from './useLocalStorage'

const useDarkMode = (darkModeEnabler) => {
    const [darkMode, setDarkMode] = useLocalStorage( 'dark-mode', darkModeEnabler); 
    useEffect(() => {//this says if dark-mode is already a class remove it, if it is not a class add it
        if (darkMode) {
            document.body.classList.remove('dark-mode');
        } else {
            document.body.classList.add('dark-mode');
        }
    }, [darkMode])

    return [darkMode, setDarkMode];

  };

  export default useDarkMode