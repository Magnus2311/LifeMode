import React from "react";
import { useLocation } from "react-router";

const ConfirmationEmailTemplate = (props) => {
  const location = useLocation();
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        width: "30rem",
        margin: "0 auto",
      }}
    >
      <img
        src="/images/logos/logo_transparent.png"
        alt="LifeModeLogo"
        style={{ width: "200px", height: "200px" }}
      />
      <h3>Confirm email for Life Mode</h3>
      <div>
        You are receiving this email in order to confirm your address. If you
        haven't registered in{" "}
        <a href="https://lifemode.online">LifeMode.online</a> please ignore this
        email!
      </div>
      {props && props.match && (
        <a
          href={`${location.protocol}//${location.host}/${props.match.params.email}/${props.match.params.token}`}
        >
          Confirm Email
        </a>
      )}
    </div>
  );
};

export default ConfirmationEmailTemplate;
