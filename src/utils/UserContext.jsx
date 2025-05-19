import React, { createContext } from "react";
export const dataContext = createContext();

const UserContext = ({ children }) => {
  const data1 = "sanat";
  const data = { data1 };
  return (
    <div>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </div>
  );
};

export default UserContext;
