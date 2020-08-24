import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import Layout from "./components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
