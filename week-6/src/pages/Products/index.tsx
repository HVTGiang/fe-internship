import { Outlet, Route, Routes } from "react-router-dom";
import Body from "./Body";
import Header from "../Header";
import DetailProduct from "./DetailProduct";

export const Products = () => {
  const Layout = (
    <>
      <Header />
      <Outlet />
    </>
  );

  return (
    <div className="board">
      <Routes>
        <Route element={Layout}>
          <Route path="/" index element={<Body />} />
          <Route path="/:id" element={<DetailProduct />} />
        </Route>
      </Routes>
    </div>
  );
};
