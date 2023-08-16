import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import styled from "@emotion/styled";
import { theme } from "./mui-config/theme";
import AuthenPage from "./pages/Authen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import DashBoard from "./pages/DashBoard";
import { getCookie } from "./cookie";
import { Products } from "./pages/Products";
import { Provider } from "react-redux";
import store from "./store";

declare module "@mui/material/styles" {
  interface Palette {
    custom: Palette["primary"];
  }

  interface PaletteOptions {
    custom?: PaletteOptions["primary"];
  }
}

const StyledApp = styled.div`
  height: 100vh;
  width: 100%;
`;

function App() {
  const isLogged =
    !!window.localStorage.getItem("accessToken") ||
    getCookie("accessToken") ||
    false;

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <StyledApp className="App">
            <Routes>
              <Route
                path="/"
                index
                element={isLogged ? <Products /> : <AuthenPage />}
              />
              <Route path="/product/*" element={<Products />} />
              <Route path="/authen/*" element={<AuthenPage />} />
            </Routes>
          </StyledApp>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
