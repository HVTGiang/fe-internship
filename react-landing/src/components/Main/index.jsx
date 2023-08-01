import { Outlet, Route, Routes } from "react-router-dom";
import EditProfile from "../../features/EditProFile";
import About from "../About";
import ExtendContact from "../ExtendContact";
import Header from "../Header";
import Info from "../Info";
import Posts from "../Posts";
import "./style.scss";
import { useSelector } from "react-redux";
import ActiveContact from "../ActiveContact";

export default function Main() {

  var viewMode = 'visitor'

  const user = useSelector((state) => state.user);

  if (user.email === "charles5182@ummoh.com") {
    viewMode = "owner"
  }

  const profileData = {
    firstName: "Charles",
    lastName: "Deo",
    title: "UI/UX Designer",
    gender: "male",
    birthday: "1980-06-26",
    address: "2239 Hog Camp Road, Schaumburg",
    email: "charles5182@ummoh.com",
    phone: "33757005467",
    img: "./img/user_img.png",
    imgCover: "./img/info_cover.png",
  }

  const ProfileSection = (
    <>
      <About data={profileData} />
      <Posts data={profileData} />
      <div className="contact">
        <ExtendContact />
        {viewMode === "owner" ? <ActiveContact /> : ""}
      </div>
    </>
  );
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
