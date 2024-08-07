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
import RegisterPublisherPage from "./pages/RegisterPublisherPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import BookFormPage from "./pages/BookFormPage";
import BookPage from "./pages/BookPage";
import EditBookFormPage from "./pages/EditBookFormPage";
import EditProfilePage from "./pages/EditProfilePage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/customer" element={<RegisterCustomerPage />} />
        <Route path="/register/publisher" element={<RegisterPublisherPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<EditProfilePage />} />
        <Route path="/books/:id" element={<BookPage />} />
        <Route path="/books/add" element={<BookFormPage />} />
        <Route path="/books/edit/:id" element={<EditBookFormPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
