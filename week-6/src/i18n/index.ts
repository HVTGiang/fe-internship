import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import loginEN from "./locale/en/login.json";
import loginVI from "./locale/vi/login.json";
import headerEN from "./locale/en/header.json";
import headerVI from "./locale/vi/header.json";
import detailProductEN from "./locale/en/detailProduct.json";
import detailProductVI from "./locale/vi/detailProduct.json";
import detailCartEN from "./locale/en/deatailCart.json";
import detailCartVI from "./locale/vi/deatailCart.json";
import productsEN from "./locale/en/products.json";
import productsVI from "./locale/vi/products.json";

const resources = {
  en: {
    translation: {
      ...loginEN,
      money: "{{value}}",
      detailCart: detailCartEN,
      products: productsEN,
      header: headerEN,
      detailProduct: detailProductEN,
    },
  },
  vi: {
    translation: {
      ...loginVI,
      detailCart: detailCartVI,
      products: productsVI,
      header: headerVI,
      detailProduct: detailProductVI,
    },
  },
};

i18n.use(initReactI18next).init({
  resources: resources,
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
