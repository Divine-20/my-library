import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import AddBook from "./pages/AddBook";
import AddAuthor from "./pages/AddAuthor";
import ProtectedRoute from "./components/ProtectedRoute";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import { Provider } from "react-redux";
import { store } from "./store";
import Authors from "./pages/Authors";
import SidebarLayout from "./components/Sidebar";
import Register from "./pages/Register";
const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<SidebarLayout />}>
                <Route
                  path="/books"
                  element={
                    <ProtectedRoute>
                      <Books />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/book/:id"
                  element={
                    <ProtectedRoute>
                      <BookDetail />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/add-book"
                  element={
                    <ProtectedRoute>
                      <AddBook />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/authors"
                  element={
                    <ProtectedRoute>
                      <Authors />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/add-author"
                  element={
                    <ProtectedRoute>
                      <AddAuthor />
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Routes>
          </Router>
          <Toaster position="top-right" />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
