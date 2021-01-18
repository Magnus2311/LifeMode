import React, { useContext, useState } from "react";
import { AuthContext } from "../../Common/Contexts/AuthContext";
import { login } from "../../../services/db/usersDbService";
import FormText from "../../common/FormText";
import { Translator } from "../../../services/languages/Laguage";

const Login = ({ returnAfterLogin }) => {
  const [logged, setLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const { setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    login(currentUser).then((isLoginSuccessful) => {
      if (isLoginSuccessful) {
        setUser(currentUser);
        setLogged(true);
      }
    });
  };

  const handleChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  };

  return logged ? (
    returnAfterLogin
  ) : (
    <form onSubmit={handleSubmit}>
      <FormText
        type="email"
        name="username"
        placeholder="Enter your email"
        handleChange={handleChange}
        label={<Translator getString="E-mail" />}
        value={currentUser.username}
      />
      <FormText
        type="password"
        name="password"
        placeholder="Enter your password"
        handleChange={handleChange}
        label={<Translator getString="Password" />}
        value={currentUser.password}
      />
      <button className="fut-btn" style={{ width: "100%" }}>
        <Translator getString="Login" />
      </button>
    </form>
  );
};

export default Login;
