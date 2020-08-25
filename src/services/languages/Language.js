import { createContext } from "react";

import { dictionaryList } from "./";

export const LanguageContext = createContext({
  userLanguage: "en",
  dictionary: dictionaryList.en,
});
