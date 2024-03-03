import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import Home from "./components/Home/Home";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;

// Outlet means When i am calling a components that is fixed (Header, footer) but  when we use outlet with the help of react-router-dom then we can do nesting
//Nesting was done in the main.jsx file and in nesting the Top level is Layout (path:"/" element={<Layout/>})
// when i had given Layout at the top level thats the reason the Nesting is going to happen
//In Main (main.jsx) we put layout/root in that if we put layout there then only it will render its childern
