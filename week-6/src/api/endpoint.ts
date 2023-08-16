const BASEURL_AUTHEN = "https://reqres.in/api";
const BASEURL_PRODUCT = "https://fakestoreapi.com/products";

const ENDPOINTS = {
  login: BASEURL_AUTHEN + "/login",
  register: BASEURL_AUTHEN + "/register",
  allProducts: BASEURL_PRODUCT + "/",
  detailProduct: BASEURL_PRODUCT + "/",
};
export default ENDPOINTS;
