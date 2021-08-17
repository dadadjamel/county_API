import React, { createContext, useReducer, useEffect, useState } from 'react';
// import { bookReducer } from '../reducers/bookReducer';

export const DarkContect = createContext();

const DarkContextProvider = (props) => {
  const [isDark , setIsDark] = useState(false)
  return (
    <DarkContect.Provider value={{ isDark, setIsDark }}>
      {props.children}
    </DarkContect.Provider>
  );
}
 
export default DarkContextProvider;