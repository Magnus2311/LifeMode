import React from "react";
import AppRouter from "./AppRouter";
import Layout from "./components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LanguageProvider } from "./services/languages/Laguage";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <Layout />
      <div className="container app-container">
        <AppRouter />
      </div>
      <ToastContainer />
    </LanguageProvider>
  );
}

export default App;
