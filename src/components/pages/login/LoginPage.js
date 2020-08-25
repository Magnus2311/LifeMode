import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Card, Image } from "react-bootstrap";
import FormText from "../../common/FormText";
import * as userActions from "../../../redux/actions/userActions";
import "../../../css/Login.css";
import ReactDOM from "react-dom";
import LoginFacebook from "./LoginFacebook";
import LogoutGoogle from "./LogoutGoogle";
import LoginGoogle from "./LoginGoogle";

const emptyUser = {
  username: "",
  password: "",
};

const LoginPage = (props) => {
  const [user, setUser] = useState(emptyUser);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onUserLogin(user);
    setUser(...user, emptyUser);
  };

  function validateForm() {
    return user.username.length > 0 && user.password.length > 0;
  }

  return (
    <div className="container-login100">
      <Card style={{ width: "28rem", margin: "10rem" }}>
        <Form style={{ margin: "1rem" }} onSubmit={handleSubmit}>
          <FormGroup>
            <FormText
              label="Username"
              type="text"
              name="username"
              placeholder="Enter username"
              value={user.username}
              handleChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <FormText
              label="Password"
              type="password"
              name="password"
              placeholder="Enter password"
              value={user.password}
              handleChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Form.Check
              className="remember-me"
              type="checkbox"
              label="Remember me"
            />
            <Button
              style={{ float: "right" }}
              className="btn btn-primary btn-block"
              type="Submit"
              disabled={!validateForm()}
            >
              Login
            </Button>
          </FormGroup>
          <p className="forgot-password text-rigth">
            Already registered <a href="#">sign in?</a>
          </p>

          <FormGroup>
            <div class="input-group">
              <div style={{ float: "left" }}>
                <LoginFacebook />
              </div>
              <div style={{ float: "right", margin: "9px" }}>
                <LoginGoogle />
              </div>
            </div>
          </FormGroup>
          {/* <LogoutGoogle /> */}
        </Form>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    onUserLogin: (user) => {
      dispatch(userActions.loginUser(user));
    },
  };
};

export default connect(mapStateToProps, mapsDispatchToProps)(LoginPage);
