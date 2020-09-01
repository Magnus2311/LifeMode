import React, { useState, createContext, useContext } from "react";

import { languageOptions, dictionaryList } from "./";

export const LanguageContext = createContext({
  userLanguage: "en",
  dictionary: dictionaryList.en,
});

export function LanguageProvider({ children }) {
  const [userLanguage, setUserLanguage] = useState("en");

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : "en";
      setUserLanguage(newLanguage);
      window.localStorage.setItem("lm-lang", newLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}

export function Translator({ getString }) {
  const languageContext = useContext(LanguageContext);
  console.log(languageContext.dictionary[getString] || getString);
  return languageContext.dictionary[getString] || getString;
}
