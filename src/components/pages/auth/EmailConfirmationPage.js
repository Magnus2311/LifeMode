import React from "react";

const EmailConfirmationPage = (props) => {
  console.log(props);
  return (
    <>
      <p>{props.match.params.email}</p>
      <p>{props.match.params.token}</p>
    </>
  );
};

export default EmailConfirmationPage;
