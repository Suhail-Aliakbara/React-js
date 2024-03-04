// import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Context/UserContextProvider";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <UserContextProvider>
        <h1>Chai aur React</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
