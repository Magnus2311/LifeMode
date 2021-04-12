import React from "react";
import { Translator } from "../../../services/languages/Laguage";

const EmailSent = (props) => {
    return <div
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
        <h3><Translator getString="Confirmation e-mail sent to:" /> {props.match.params.email}</h3>
        <div>
            <Translator getString="You will be able to sign-in your account as soon as you confirm your e-mail." />
        </div>
    </div>
}

export default EmailSent;