import { Outlet, Route, Routes } from "react-router-dom";
import AllProduct from "./AllProduct";
import DetailProduct from "./DetailProduct";
import Header from "../../components/Header";

export const Products = () => {
  const Layout = (
    <>
      {/* <Header /> */}
      <Outlet />
    </>
  );

  return (
    <div className="board">
      <Routes>
        <Route element={Layout}>
          <Route path="/" index element={<AllProduct />} />
          <Route path="/:id" element={<DetailProduct />} />
        </Route>
      </Routes>
    </div>
  );
};
