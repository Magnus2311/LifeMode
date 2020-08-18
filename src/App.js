import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import Layout from "./components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Layout />
      <Container fluid style={{ minWidth: "380px" }}>
        <AppRouter />
      </Container>
    </>
  );
}

export default App;
