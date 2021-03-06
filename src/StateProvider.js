//setup datalayer
//we need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

//Build a provider - wrap entire app inside this provider
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer( reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);