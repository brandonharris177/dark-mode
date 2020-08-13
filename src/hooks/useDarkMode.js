import React, {useState, useEffect} from 'react';
import useLocalStorage from './useLocalStorage'

const useDarkMode = (trueOrFalse) => {
    const [darkMode, setDarkMode] = useLocalStorage( 'dark-mode', trueOrFalse); //this passes the Local storage the key of 'dark-mode' and the itialValue of true or false comming from the navBar
    // console.log(trueOrFalse)
    useEffect(() => {//this says if dark-mode is already a class remove it, if it is not a class add it
        if (darkMode) {
            document.body.classList.add('dark-mode');
            console.log(`dark-mode added`)
        } else {
            document.body.classList.remove('dark-mode');
            console.log(`dark-mode removed`)
        }
    }, [darkMode])//useDarkMode only fires whenever dark-mode changes only want to pay attention to changes in dark mode (toggle in the Nav Bar)

    return [darkMode, setDarkMode]; //this returns darkMode (as a value of either true or false) and the ability to change it

  };

  export default useDarkMode