// import { useState } from 'react'
import "./App.css";
import HomePage from "./pages/HomePage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
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
