import React, { useContext, useState } from "react";
import { AuthContext } from "../../common/Contexts/AuthContext";
import { login } from "../../../services/users/usersDbService";
import FormText from "../../common/FormText";
import { Translator } from "../../../services/languages/Laguage";
import * as emailsService from "../../../services/helpers/emailsService";
import { useHistory } from "react-router";
import ReactDomServer from "react-dom/server";
import ResetPasswordEmailTemplate from "../templates/emails/ResetPasswordEmailTemplate";
import { sendResetPasswordEmail } from "../../../services/auth/authenticate";

const Login = ({ returnAfterLogin, email, isConfirmation }) => {
  const [logged, setLogged] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isWrongCredentials, setIsWrongCredentials] = useState(false);
  const [isLoginActive, setIsLoginActive] = useState(false);
  const [currentUser, setCurrentUser] = useState({ username: email });
  const history = useHistory();
  const { setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    login(currentUser).then((isLoginSuccessful) => {
      if (isLoginSuccessful) {
        setUser(currentUser);
        setLogged(true);
        !returnAfterLogin && history.push("/");
      } else {
        setIsWrongCredentials(true);
        setCurrentUser({ ...currentUser, password: "" });
        changeIsLoginActive("password", "");
      }
    });
  };

  const handleChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
    changeIsLoginActive(e.target.name, e.target.value);
  };

  const changeIsLoginActive = (propName, propValue) => {
    switch (propName) {
      case "username":
        const isEmail = emailsService.isValidEmail(propValue);
        setIsValidEmail(isEmail);
        setIsLoginActive(
          propValue &&
            propValue !== "" &&
            isEmail &&
            currentUser &&
            currentUser.password
        );
        break;
      case "password":
        setIsLoginActive(propValue && propValue !== "" && isValidEmail);
        break;
      default:
        break;
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    const template = <ResetPasswordEmailTemplate />;
    const user = {
      username: currentUser.username,
      template: ReactDomServer.renderToStaticMarkup(template),
    };
    sendResetPasswordEmail(user);
  };

  return logged && returnAfterLogin ? (
    returnAfterLogin
  ) : (
    <>
      <img
        alt="Life Mode logo"
        src="/images/logos/logo_transparent.png"
        style={{ height: "20rem", width: "20rem", alignSelf: "baseline" }}
      />
      {isConfirmation ? (
        <h5 style={{ color: "#97db48" }}>
          <Translator getString="Email confirmed successfully!" />
        </h5>
      ) : (
        <>
          <h3>
            <Translator getString="Welcome back" />
          </h3>
          <h5>
            <Translator getString="Login and continue to enjoy our site" />
          </h5>
        </>
      )}

      {isWrongCredentials && (
        <h6 style={{ color: "red" }}>
          <Translator getString="E-mail or password are wrong!" />{" "}
        </h6>
      )}
      <form onSubmit={handleSubmit} className="add-form">
        <FormText
          type="email"
          name="username"
          placeholder="Enter your email"
          handleChange={handleChange}
          label={<Translator getString="E-mail" />}
          value={currentUser.username}
          autoFocus={!isWrongCredentials && !isConfirmation}
        />
        <FormText
          type="password"
          name="password"
          placeholder="Enter your password"
          handleChange={handleChange}
          label={<Translator getString="Password" />}
          value={currentUser.password}
          autoFocus={isWrongCredentials || isConfirmation || email}
        />
        <button
          className="btn btn-primary btn-xl"
          style={{ width: "100%" }}
          disabled={!isLoginActive}
        >
          <Translator getString="Login" />
        </button>
        <button
          className="btn btn-secondary"
          disabled={
            !currentUser ||
            !currentUser.username ||
            currentUser.username === "" ||
            !isValidEmail
          }
          style={{ width: "100%", marginTop: "1rem" }}
          onClick={handleResetPassword}
        >
          <Translator getString="Reset your password" />
        </button>
      </form>
    </>
  );
};

export default Login;
