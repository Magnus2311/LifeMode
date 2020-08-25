import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

const responseFacebook = (response) => {
  console.log(response);
};

const LoginFacebook = (props) => {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <>
      <FacebookLogin
        appId="597620174449811"
        autoLoad={true}
        cssClass="btn-facebook"
        fields="name,email,picture"
        scope="public_profile,user_friends"
        callback={responseFacebook}
        icon="fa-facebook"
      />
    </>
  );
};

export default LoginFacebook;
