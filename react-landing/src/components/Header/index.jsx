import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUser } from "../../redux/userSlice";
import "./style.scss";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate()

  function navigateToEdit() {
    navigate("/profile-edit")
  }
  function handleLogout() {
    navigate("/login")
  }

  return (
    <div className="header" id="header">
      <label htmlFor="toggle-nav">
        <div className="icon">
          <i className="fa-solid fa-bars"></i>
        </div>
      </label>
      <input type="checkbox" hidden id="toggle-nav" />
      <div className="search">
        <label htmlFor="search">
          <i className="fa-solid fa-magnifying-glass search__icon"></i>
        </label>
        <input
          id="search"
          type="text"
          name="search"
          className="search__box"
          placeholder="Search"
        />
      </div>
      <div className="user">
        <div className="user__text">
          <p className="user__name" onClick={navigateToEdit}>{user.firstName + " " + user.lastName}</p>
          <p className="user__logout" onClick={handleLogout}>Log out</p>
        </div>
        <div className="user__img" onClick={navigateToEdit}>
          <img src={user.img} alt="Charles Deo" />
        </div>
      </div>
    </div>
  );
}
