import React, { useEffect, useState } from "react";
import { checkConfirmationToken } from "../../../services/auth/authenticate";
import Login from "./Login";

const EmailConfirmationPage = (props) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isResponded, setIsResponded] = useState(false);
  const { email, token } = props.match.params;

  let content;

  if (!isCorrect && !isResponded) {
    content = <>LOADING...</>;
  } else if (!isCorrect && isResponded) {
    content = <>Expired Token. Resend new one!</>;
  } else {
    content = <Login email={email} isConfirmation={true} />;
  }

  useEffect(() => {
    checkConfirmationToken(email, token)
      .then(() => {
        setIsCorrect(true);
        setIsResponded(true);
      })
      .catch(() => {
        setIsResponded(true);
      });
  }, [email, token]);
  return <>{content}</>;
};

export default EmailConfirmationPage;
