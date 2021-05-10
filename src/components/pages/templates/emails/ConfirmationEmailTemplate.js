import React from "react";

const ConfirmationEmailTemplate = ({ username }) => {
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
        src="cid:{0}"
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
      {username && (
        <a
          href={`${window.location.protocol}//${window.location.host}/auth/emailConfirmed/${username}/{1}`}
        >
          Confirm Email
        </a>
      )}
    </div>
  );
};

export default ConfirmationEmailTemplate;
