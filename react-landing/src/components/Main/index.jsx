import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import EditProfile from "../../features/EditProFile";
import About from "../About";
import ExtendContact from "../ExtendContact";
import Header from "../Header";
import Info from "../Info";
import Posts from "../Posts";
import ActiveContact from "../ActiveContact";

import handleNavResponsive from "./main";
import data from "./data.json"

import "./style.scss";

export default function Main() {

  var viewMode = 'visitor'

  const user = useSelector((state) => state.user);

  // Whether using useMemo for it?
  if (user.email === "charles5182@ummoh.com") {
    viewMode = "owner"
  }

  const ProfileSection = (
    <>
      <About data={data} />
      <Posts data={data} />
      <div className="contact">
        <ExtendContact />
        {viewMode === "owner" ? <ActiveContact /> : ""}
      </div>
    </>
  );

  useEffect(() => {
    handleNavResponsive()
  }, [])
  
  return (
    <div id="main">
      <Header />
      <Routes>
        <Route path="" element={<Info viewMode={viewMode} />}></Route>
        <Route path="profile" element={<Info viewMode={viewMode} />}></Route>
        <Route path="profile-edit" element={<Info viewMode="edit" />}></Route>
      </Routes>
      <div className="content-group">
        <Routes>
          <Route path="" element={ProfileSection}>
            <Route path="profile" element={ProfileSection}></Route>
          </Route>
          <Route path="/profile-edit" element={<EditProfile />}></Route>
        </Routes>
      </div>
    </div >
  );
}
