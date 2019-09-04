import React, {useState} from 'react';

const useLocalStorage = (key, initialValue) => {//the key is what local storage will use to store the value that is comming from useDarkMode (in this case it is dark-mode) and the initialValue is what the value currently is we have it set to false initally in the NavBar
    // console.log(initialValue)
    const [storedValue, setStoredValue] = useState(() => {
      const item = window.localStorage.getItem(key);//this gets the item from storage (which in this case is either true or false) using the key (dark-mode) and sets its value = item
      // console.log (key, item) 
      // console.log(key, initialValue)
      return item ? JSON.parse(item) : initialValue;//this returns the item (true or false) from local storage if it is nonexistant there it returns the intialValue.  
    });

    const setValue = value => {
        setStoredValue(value); //this sets the state of storedValue equal to value that was paied to the key in Storage (either true or false)
        // console.log(value) 
        window.localStorage.setItem(key, JSON.stringify(value)); //this sets the value of the local storage to either true or false (item)depending on (value)
      };
  
    return [storedValue, setValue]; //we then return the stored value and the ability to set the value
  };

  export default useLocalStorage