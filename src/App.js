import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import Layout from "./components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer />
    </>
  );
}

export default App;

// import React, { useState } from "react";
// import FacebookLogin from "react-facebook-login";
// import { Card, Image } from "react-bootstrap";
// import "./App.css";

// function App() {
//   const [login, setLogin] = useState(false);
//   const [data, setData] = useState({});
//   const [picture, setPicture] = useState("");

//   const responseFacebook = (response) => {
//     console.log(response);
//     setData(response);
//     setPicture(response.picture.data.url);
//     if (response.accessToken) {
//       setLogin(true);
//     } else {
//       setLogin(false);
//     }
//   };

//   return (
//     <div class="container">
//       <Card style={{ width: "600px" }}>
//         <Card.Header>
//           {!login && (
//             <FacebookLogin
//               appId="597620174449811"
//               autoLoad={true}
//               fields="name,email,picture"
//               scope="public_profile,user_friends"
//               callback={responseFacebook}
//               icon="fa-facebook"
//             />
//           )}
//           {login && <Image src={picture} roundedCircle />}
//         </Card.Header>
//         {login && (
//           <Card.Body>
//             <Card.Title>{data.name}</Card.Title>
//             <Card.Text>{data.email}</Card.Text>
//           </Card.Body>
//         )}
//       </Card>
//     </div>
//   );
// }

// export default App;
