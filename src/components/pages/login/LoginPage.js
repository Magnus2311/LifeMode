import React, { useState } from "react";
import { Button, FormGroup, Form } from "react-bootstrap";
import { connect } from "react-redux";
import FormText from "../../common/FormText";
import * as userActions from "../../../redux/actions/userActions";
import "../../../css/Login.css";

const emptyUser = {
  email: "",
  password: "",
};

const LoginPage = (props) => {
  const [user, setUser] = useState(emptyUser);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  function validateForm() {
    return user.email.length > 0 && user.password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onUserLogin(user);
    setUser(user);
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormText
            label="email"
            type="email"
            autoFocus
            name="email"
            placeholder="Enter email"
            value={user.email}
            handleChange={handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <Form.Label>Password</Form.Label>
          <FormText
            type="password"
            name="password"
            value={user.password}
            handleChange={handleChange}
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

const mapsStateToProps = (state) => {
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

export default connect(mapsStateToProps, mapsDispatchToProps)(LoginPage);
