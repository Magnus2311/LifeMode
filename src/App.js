import React from "react";
import AppRouter from "./AppRouter";
import Layout from "./components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LanguageProvider } from "./services/languages/Laguage";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <Layout />
      <Container
        fluid
        className="text-centered"
        style={{ minWidth: "380px", display: "grid", placeItems: "center" }}
      >
        <Row>
          <AppRouter />
        </Row>
      </Container>
      <ToastContainer />
    </LanguageProvider>
  );
}

export default App;
