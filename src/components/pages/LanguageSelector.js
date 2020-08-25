import React, { useContext, useEffect } from "react";

import { languageOptions } from "../../services/languages";
import { NavDropdown, Image } from "react-bootstrap";
import { LanguageContext } from "../../services/languages/Laguage";

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    userLanguageChange(e.target.getAttribute("data-language"));
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
      title={
        <Image
          style={{ height: "20px", width: "20px" }}
          src={`/images/languages/${userLanguage}.png`}
        />
      }
    >
      {Object.entries(languageOptions).map(([id, name]) => {
        return (
          <NavDropdown.Item>
            <Image
              style={{ height: "20px", width: "20px" }}
              key={id}
              data-language={id}
              onClick={handleLanguageChange}
              src={`/images/languages/${id}.png`}
            />
          </NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
}
