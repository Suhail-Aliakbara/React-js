// import { useState } from "react";
import "./App.css";
// import reactLogo from "./assets/react.svg";
import Card from "./components/card";

function App() {
  let myObj = {
    userName: "Suhail",
    userImage:
      "https://images.pexels.com/photos/18509324/pexels-photo-18509324/free-photo-of-blooming-white-buttecup-flower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    btnText: "Click me",
  };
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 font-bold rounded-xl mb-4">
        Tailwind CSS
      </h1>

      <Card {...myObj} />

      <Card
        userName="Sami"
        userImage="https://images.pexels.com/photos/18509324/pexels-photo-18509324/free-photo-of-blooming-white-buttecup-flower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      />
    </>
  );
}

export default App;
