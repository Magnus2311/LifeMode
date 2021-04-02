import React, { useState } from "react";
import * as usersDb from "../../../services/users/usersDbService";
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
    <>
      <img
        alt="Life Mode logo"
        src="/images/logos/logo_transparent.png"
        style={{ height: "100px", width: "100px", alignSelf: "baseline" }}
      />
      <h3>
        <Translator getString="Let's get started" />
      </h3>
      <h5>
        <Translator getString="Sign up for free and get a lot of perks!" />
      </h5>
      <form onSubmit={handleSubmit} className="add-form">
        <FormText
          handleChange={handleChange}
          value={user.username}
          label={<Translator getString="E-mail" />}
          name="username"
          placeholder="Enter your email"
          type="email"
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            columnGap: "0.75rem",
          }}
        >
          <FormText
            handleChange={handleChange}
            value={user.password}
            label={<Translator getString="Password" />}
            name="password"
            placeholder="Enter your password"
            type="password"
          />
          <FormText
            handleChange={handleChange}
            value={user.confirmPassword}
            label={<Translator getString="Confirm password" />}
            name="confirmPassword"
            placeholder="Confirm your password"
            type="password"
          />
        </div>
        <button className="btn btn-primary btn-xl" style={{ width: "100%" }}>
          <Translator getString="Register" />
        </button>
      </form>
    </>
  );
};

export default Registration;
