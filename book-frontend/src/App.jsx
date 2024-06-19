// import { useState } from 'react'
import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RegisterCustomerPage from "./pages/RegisterCustomerPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/customer" element={<RegisterCustomerPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    )
  );

  //   return <RouterProvider router={router} />;
  return <RouterProvider router={router} />;
};

// function App() {
//   const router = createBrowserRouter(
//     createRoutesFromElement(
//       <Route path="/" element={<MainLayout />}>
//         <Route index element={<HomePage />} />
//       </Route>
//     )
//   );

//   //   return <RouterProvider router={router} />;
//   return (
//     <>
//       <NavBar />
//     </>
//   );
// }

export default App;
