// AppContext.js

import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null); // State for image

  return (
    <AppContext.Provider value={{ username, setUsername, image, setImage }}>
      {children}
    </AppContext.Provider>
  );
};
