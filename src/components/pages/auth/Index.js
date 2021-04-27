import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { sighOut } from "../../../services/auth/authenticate";
import { Translator } from "../../../services/languages/Laguage";
import { changePassword } from "../../../services/users/usersDbService";
import { AuthContext } from "../../common/Contexts/AuthContext";
import FormText from "../../common/FormText";

const Index = () => {
  const { user, setUser } = useContext(AuthContext);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [
    isSumbitChangePasswordActive,
    setIsSumbitChangePasswordActive,
  ] = useState(false);
  const [isChangePasswordActive, setIsChangePasswordActive] = useState(false);
  const history = useHistory();

  const handleChangePasswordClick = (e) => {
    e.preventDefault();
    setIsChangePasswordActive(!isChangePasswordActive);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    setIsSumbitChangePasswordActive(
      e.target.value !== "" &&
        e.target.value === confirmNewPassword &&
        oldPassword !== ""
    );
  };

  const handleConfirmNewPasswordChange = (e) => {
    setConfirmNewPassword(e.target.value);
    setIsSumbitChangePasswordActive(
      e.target.value !== "" &&
        e.target.value === newPassword &&
        oldPassword !== ""
    );
  };

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
    setIsSumbitChangePasswordActive(
      e.target.value !== "" &&
        newPassword !== "" &&
        newPassword === confirmNewPassword
    );
  };

  const handleSubmitChangePassword = (e) => {
    e.preventDefault();
    changePassword(oldPassword, newPassword).then((isSuccessful) => {
      if (isSuccessful) {
        setIsChangePasswordActive(false);
        setOldPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
        setIsSumbitChangePasswordActive(false);
      }
    });
  };

  const handleSignOutClick = (e) => {
    e.preventDefault();
    sighOut();
    setUser({});
    history.push("/");
  };

  return (
    <>
      <h4>
        <Translator getString="Basic settings for account" />
      </h4>
      <hr />
      <div className="add-form">
        {user && user.username && (
          <FormText
            label={<Translator getString="E-mail" />}
            value={user.username.toLowerCase()}
            disabled
          />
        )}
        <div
          className={`expandable ${
            isChangePasswordActive ? "expanded" : "collapsed"
          }`}
          style={{
            maxHeight: isChangePasswordActive ? "400px" : "38px",
            borderRadius: "7px",
            border: "solid 0.2rem rgb(38 143 255 / 50%)",
            borderWidth: isChangePasswordActive ? "0.2rem" : "0rem",
            marginBottom: "1rem",
          }}
        >
          <button
            className="btn btn-primary"
            onClick={handleChangePasswordClick}
            style={{ width: "100.2%", marginLeft: "-0.3px" }}
          >
            <Translator getString="Change password" />
          </button>
          <div
            className="fadeable"
            style={{
              opacity: isChangePasswordActive ? "1" : "0",
              visibility: isChangePasswordActive ? "visible" : "collapse",
              padding: "1rem",
            }}
          >
            <FormText
              type="password"
              name="oldPassword"
              placeholder="Enter your old password"
              handleChange={handleOldPasswordChange}
              label={<Translator getString="Old Password" />}
              value={oldPassword}
            />
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
              disabled={!isSumbitChangePasswordActive}
              style={{
                width: "100%",
              }}
            >
              <Translator getString="Submit new password" />
            </button>
          </div>
        </div>
      </div>
      <button onClick={handleSignOutClick} className="btn btn-primary">
        <Translator getString="Sign out" />
      </button>
    </>
  );
};

export default Index;
