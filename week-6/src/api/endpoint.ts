const BASEURL_AUTHEN = "https://reqres.in/api";
const BASEURL_PRODUCT = "https://fakestoreapi.com/products";
const BASEURL_POST = "https://jsonplaceholder.typicode.com/posts";
const BASEURL_USER = "https://jsonplaceholder.typicode.com/users";

const ENDPOINTS = {
  login: BASEURL_AUTHEN + "/login",
  register: BASEURL_AUTHEN + "/register",
  allProducts: BASEURL_PRODUCT + "/",
  detailProduct: BASEURL_PRODUCT + "/",
  posts: {
    allPosts: BASEURL_POST + "/",
    detailPosts: BASEURL_POST + "/",
    commentsPostfix: "comments",
  },
  user: {
    allUser: BASEURL_USER + "/",
    detailUser: BASEURL_USER + "/",
  },
};
export default ENDPOINTS;
