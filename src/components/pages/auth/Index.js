import React, { useContext } from "react";
import { useHistory } from "react-router";
import { sighOut } from "../../../services/auth/authenticate";
import { Translator } from "../../../services/languages/Laguage";
import { AuthContext } from "../../Common/Contexts/AuthContext";

const Index = () => {
  const { user, setUser } = useContext(AuthContext);
  const history = useHistory();

  const handleClick = (e) => {
    debugger;
    e.preventDefault();
    sighOut();
    setUser({});
    history.push("/");
  };

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <div>
        <div>
          <Translator getString="Username" />
          {":"}
        </div>
        <div>{user.username ? user.username.toLowerCase() : ""}</div>
      </div>
      <div>
        <button onClick={handleClick} className="btn btn-light btn-sm">
          <Translator getString="Sign out" />
        </button>
      </div>
    </div>
  );
};

export default Index;
