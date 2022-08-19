import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BookListPage from "./pages/BookListPage/BookListPage";
import BookPage from "./pages/BookPage/BookPage";
import Page404 from "./pages/Page404/Page404";
import AuthorListPage from "./pages/AuthorListPage/AuthorListPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

const AppRoutes = ({ setIsAuth, isAuth }) => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage setIsAuth={setIsAuth} isAuth={isAuth} />}
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/book"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <BookListPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/book/:bookId"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <BookPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/author"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <AuthorListPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

const ProtectedRoute = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to="/login" />;
};

export default AppRoutes;
