import "./App.scss";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Login from "./features/Login";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import EditProfile from "./features/EditProFile";
import About from "./components/About";
import Posts from "./components/Posts";
import ExtendContact from "./components/ExtendContact";
function App() {
  const defaultUI =
    <>
      <Nav />
      <Main />
    </>

  return (
    <>
      <Routes>
        <Route path="/*" element={defaultUI} />
        <Route path="/login" element={<Login />} index />
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Main />} >
          <Route path="" index element={ProfileSection}></Route>
          <Route path="profile" element={ProfileSection}></Route>
          <Route path="profile-edit" element={EditProfileSection}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes> */}
    </>
  );
}

export default App;
