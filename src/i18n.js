import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./lang/en/common.json";
import fr from "./lang/fr/common.json";
import az from "./lang/az/common.json";

const defaultLang = localStorage.getItem("lang");

i18n.use(initReactI18next).init({
 
  resources: {
    en,
    fr,
    az,
  },

  lng: defaultLang || "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
