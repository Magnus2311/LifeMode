import React, { useState } from "react";
import "../../../css/Login.css";
import GoogleButton from "react-google-button";

import { GoogleLogin } from "react-google-login";
// refresh token
import { refreshTokenSetup } from "../../common/refreshTokenSetup";

import { GoogleLogout } from "react-google-login";

const clientId =
  "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

function Login() {
  const [google, setGoogle] = useState(null);
  const responseGoogle = (response) => {
    console.log(response);
    setGoogle(response.profileObj);
  };
  const logout = (res) => {
    setGoogle(null);
  };

  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  return (
    <>
      {google ? (
        <>
          <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={logout}
          ></GoogleLogout>
        </>
      ) : (
        <>
          <GoogleLogin
            clientId={clientId}
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            theme="dark"
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
            style={{ width: "50px" }}
          />
        </>
      )}
    </>
  );
}

export default Login;
