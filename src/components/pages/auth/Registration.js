import React, { useState } from "react";
import * as usersDb from "../../../services/db/usersDbService";
import { Translator } from "../../../services/languages/Laguage";
import FormText from "../../common/FormText";

const Registration = ({ history }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userToInsert = {
      createdDate: new Date(),
      password: user.password,
      username: user.username,
      eaAccounts: [],
    };
    usersDb.add(userToInsert);
    history.push("/auth/emailsent");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormText
        handleChange={handleChange}
        value={user.username}
        label={<Translator getString="E-mail" />}
        name="username"
        placeholder="Enter your email"
        type="email"
      ></FormText>
      <FormText
        handleChange={handleChange}
        value={user.password}
        label={<Translator getString="Password" />}
        name="password"
        placeholder="Enter your password"
        type="password"
      ></FormText>
      <FormText
        handleChange={handleChange}
        value={user.confirmPassword}
        label={<Translator getString="Confirm password" />}
        name="confirmPassword"
        placeholder="Confirm your password"
        type="password"
      ></FormText>
      <button className="btn btn-primary btn-xl" style={{ width: "100%" }}>
        <Translator getString="Register" />
      </button>
    </form>
  );
};

export default Registration;
