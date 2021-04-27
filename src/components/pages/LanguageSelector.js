import React, { useContext, useEffect } from "react";

import { languageOptions } from "../../services/languages";
import { NavDropdown, Image } from "react-bootstrap";
import { LanguageContext } from "../../services/languages/Laguage";

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    userLanguageChange(e.currentTarget.getAttribute("data-language"));
  };

  useEffect(() => {
    let defaultLanguage = window.localStorage.getItem("lm-lang");
    if (!defaultLanguage) {
      defaultLanguage = window.navigator.language.substring(0, 2);
    }
    userLanguageChange(defaultLanguage);
  }, [userLanguageChange]);

  return (
    <NavDropdown
      style={{
        position: "absolute",
        right: "0",
        left: "30",
        top: "0.5rem",
        zIndex: "99",
      }}
      title={
        <Image
          style={{
            height: "20px",
            width: "20px",
          }}
          src={`/images/languages/${userLanguage}.png`}
        />
      }
    >
      {Object.entries(languageOptions).map(([id, name]) => {
        return (
          <NavDropdown.Item
            key={id}
            data-language={id}
            onClick={handleLanguageChange}
          >
            <Image
              style={{ height: "20px", width: "20px" }}
              title={name}
              src={`/images/languages/${id}.png`}
            />
          </NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
}
