import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import Layout from "./components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Layout />
      <div className="container col-12 col-md-8 col-lg-6">
        <AppRouter />
      </div>
    </>
  );
}

export default App;
