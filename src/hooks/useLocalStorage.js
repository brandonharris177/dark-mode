import React, {useState} from 'react';

const useLocalStorage = (key, initialValue) => {//the Itital key is
    const [storedValue, setStoredValue] = useState(() => {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;//this returns the item from local storage if it is not there it returns the intialValue.  
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
      };
  
    return [storedValue, setValue];
  };

  export default useLocalStorage