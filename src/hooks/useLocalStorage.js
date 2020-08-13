import React, {useState} from 'react';

const useLocalStorage = (key, initialValue) => {//the key is what local storage will use to store the value that is comming from useDarkMode (in this case it is dark-mode) and the initialValue is what the value currently is we have it set to false initally in the NavBar
    // console.log(initialValue)
    const [storedValue, setStoredValue] = useState(() => {
      const item = window.localStorage.getItem(key);//this gets the item from storage (if the item (dark-mode) exists it is true if it does not exist it is false) this value is then set equal to item. This does not run when changing dark mode only on initial render.
      // console.log (key, item) 
      // console.log(key, initialValue)
      console.log(`checking local storage`) 
      return item ? JSON.parse(item) : initialValue;//this checks if the item exists if it doesn't is says to proceed with the inital value
    });
                      //the following lines are initally nothing but when the value changes this method allows it to be set (very similar to setStoredValue but with funcionality of setting local storage) wont be invoked until the value is changed and not used on inital render
    const setValue = updatedValue => {//really is set darkMode (when changed it skips here to line 12 before useDarkMode is put into effect)
        setStoredValue(updatedValue); //this sets the state of storedValue equal to value that was paied to the key (dark-mode that was passed from used dark mode as a parameter in line 3) in Storage (either true or false)
        // console.log(value) 
        window.localStorage.setItem(key, JSON.stringify(updatedValue)); //this sets the value of the local storage Item to either true or false depending on updated value
        console.log(`local Storage Updated`)
      };
  
    return [storedValue, setValue]; //we then return the stored value and the ability to set the value
  };

  export default useLocalStorage