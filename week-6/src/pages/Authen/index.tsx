import { Route, Routes, Outlet } from "react-router-dom";

import styled from "@emotion/styled";

import Login from "./Login";
import SignUp from "./SignUp";

const Background = styled.div`
  display: block;
  position: fixed;
  /* width: 100%; */
  height: auto;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: -999;
  img {
    display: block;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: bottom center;
  }
`;

const StyledAuthen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const AuthenPage = () => {
  const Layout = (
    <StyledAuthen>
      <Background>
        <img src="/img/authen-background.jpg" alt="" />
      </Background>
      <Outlet />
    </StyledAuthen>
  );

  return (
    <Routes>
      <Route element={Layout}>
        <Route path="/" index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
};
export default AuthenPage;
