import { useState } from "react";
import "./App.css";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 15;
  const addValue = () => {
    // console.log(`Clicked : ${counter}`);
    // counter += 1;
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>remove Value {counter}</button>
    </>
  );
}

export default App;
