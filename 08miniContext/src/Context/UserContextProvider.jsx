import PropTypes from "prop-types";
import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;

// your UserContextProvider function here...
UserContextProvider.propTypes = {
  children: PropTypes.node,
};
