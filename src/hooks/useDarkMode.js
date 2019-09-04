import React, {useState, useEffect} from 'react';
import useLocalStorage from './useLocalStorage'

const useDarkMode = (darkModeEnabled) => {
    const [darkMode, setDarkMode] = useLocalStorage( 'dark-mode', darkModeEnabled);
    useEffect(() => {
        if (darkMode) {
            document.body.classList.remove('dark-mode');
        } else {
            document.body.classList.add('dark-mode');
        }
    }, [darkMode])

    return [darkMode, setDarkMode];

  };

  export default useDarkMode