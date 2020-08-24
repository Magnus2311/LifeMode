import React, { useState, createContext, useContext } from "react";

import { languageOptions, dictionaryList } from "./";

export const LanguageContext = createContext({
  userLanguage: "en",
  dictionary: dictionaryList.en,
});
