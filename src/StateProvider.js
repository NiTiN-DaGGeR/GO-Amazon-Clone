import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
<<<<<<< Updated upstream
export const useStateValue = () => useContext(StateContext);
=======
export const useStateValue = () => useContext(StateContext);
>>>>>>> Stashed changes
