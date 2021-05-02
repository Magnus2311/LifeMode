import React, { useEffect, useState } from "react";
import { checkResetPasswordToken } from "../../../services/auth/authenticate";
import { resetPassword } from "../../../services/users/usersDbService";
import { Translator } from "../../../services/languages/Laguage";
import FormText from "../../common/FormText";
import Login from "./Login";

const ResetPassword = (props) => {
  const { token } = props.match.params;
  const [email, setEmail] = useState();
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [
    isSumbitChangePasswordActive,
    setIsSumbitChangePasswordActive,
  ] = useState(false);
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);

  useEffect(() => {
    checkResetPasswordToken(token).then((email) => {
      debugger;
      setEmail(email);
    });
  }, [token]);

  const handleSubmitChangePassword = (e) => {
    e.preventDefault();
    resetPassword(token, newPassword).then((isSuccessful) => {
      if (isSuccessful) {
        setIsPasswordChanged(isSuccessful);
      }
    });
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    setIsSumbitChangePasswordActive(
      e.target.value !== "" && e.target.value === confirmNewPassword
    );
  };

  const handleConfirmNewPasswordChange = (e) => {
    setConfirmNewPassword(e.target.value);
    setIsSumbitChangePasswordActive(
      e.target.value !== "" && e.target.value === newPassword
    );
  };

  let content;

  if (isPasswordChanged) {
    content = <Login email={email} />;
  } else {
    content = (
      <form className="add-form">
        <FormText
          type="password"
          name="newPassword"
          placeholder="Enter your new password"
          handleChange={handleNewPasswordChange}
          label={<Translator getString="New Password" />}
          value={newPassword}
        />
        <FormText
          type="password"
          name="confirmNewPassword"
          placeholder="Confirm password"
          handleChange={handleConfirmNewPasswordChange}
          label={<Translator getString="Confirm password" />}
          value={confirmNewPassword}
        />
        <button
          onClick={handleSubmitChangePassword}
          className="btn btn-primary"
          style={{
            width: "100%",
          }}
          disabled={!isSumbitChangePasswordActive}
        >
          <Translator getString="Reset password" />
        </button>
      </form>
    );
  }
  return content;
};

export default ResetPassword;
