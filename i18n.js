// lib/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require("./public/locales/en/translation.json"),
      },
      vi: {
        translation: require("./public/locales/vi/translation.json"),
      },
    },
    fallbackLng: "en",
    debug: true,
  });

export default i18n;
