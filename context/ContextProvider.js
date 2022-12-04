import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

// make initial objects

export const ContextProvider = ({ children }) => {
  // make states and functions
  const [setCollapseSidebar, setSetCollapseSidebar] = useState(false);
  const [loginUserDetails, setLoginUserDetails] = useState(null);

  return (
    <StateContext.Provider
      value={
        {
          // call them here to to transfer them to any where
          setCollapseSidebar, setSetCollapseSidebar,
          loginUserDetails, setLoginUserDetails
        }
      }
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
