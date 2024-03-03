import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import App from "./App.jsx";
import Layout from "./Layout";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Github from "./components/Github/Github";
import Home from "./components/Home/Home";
import User from "./components/User/User";
import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "About",
//         element: <About />,
//       },
//       {
//         path: "Contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="User/:userid" element={<User />} />
      <Route path="Github" element={<Github />} />
    </Route>
  )
);
//CreateBrowserRouter with the help of this we can create Router
// You can do routing as much as you want
//Example:
//<Route path="/" element={<Layout />}>
//<Route path="about" element={<About />}>
//<Route path="Suhail" element={<Suhail />} />
//</Route>
//</Route>
// Router in router in Router
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
//Router Provider is a rapper in which you packed all the things and he need only 1 thing that is Router
