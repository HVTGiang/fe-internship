import { useState } from "react";
import { Link } from "react-router-dom";

import {
  HomeSVG,
  ProfileSVG,
  MessageSVG,
  PurchaseSVG,
  ReturnSVG,
  GallerySVG,
  AnalyticsSVG,
  SettingsSVG,
} from "../../assets/svg/index";

import "./style.scss";

export default function Nav() {
  const navItems = [
    { title: "Home", icon: <HomeSVG />, route: "/home" },
    { title: "Profile", icon: <ProfileSVG />, route: "/profile" },
    { title: "Messages", icon: <MessageSVG />, route: "/messages" },
    { title: "Purchases", icon: <PurchaseSVG />, route: "/purchases" },
    { title: "Returns", icon: <ReturnSVG />, route: "/returns" },
    { title: "Gallery", icon: <GallerySVG />, route: "/gallery" },
    { title: "Analytics", icon: <AnalyticsSVG />, route: "/analytics" },
    { title: "Settings", icon: <SettingsSVG />, route: "/settings" },
  ];

  const [selected, setSelected] = useState(1);

  function handleChangeNav(e) {
    const liELement = e.target.closest("li");
    setSelected(+liELement.dataset.index);
  }

  return (
    <>
      <nav id="nav" className="hide">
        <div id="logo">
          <img src="./logo.png" alt="Logo of 3MM" />
          <span>3MM</span>
        </div>

        <ul className="menu">
          {navItems.map((item, i) => (
            <Link to={item.route} style={{ textDecoration: "none" }} key={i}>
              <li
                key={i}
                data-index={i}
                className={
                  i === selected ? "menu__item--select menu__item" : "menu__item"
                }
                onClick={(e) => {
                  handleChangeNav(e);
                }}
              >
                <div className="menu__icon">{item.icon}</div>
                <span>{item.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <div className="modal-background hide"></div>
    </>
  );
}
