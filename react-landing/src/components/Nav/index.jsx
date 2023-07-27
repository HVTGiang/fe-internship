import { useState } from "react";
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
    { title: "Home", icon: <HomeSVG /> },
    { title: "Profile", icon: <ProfileSVG /> },
    { title: "Messages", icon: <MessageSVG /> },
    { title: "Purchases", icon: <PurchaseSVG /> },
    { title: "Returns", icon: <ReturnSVG /> },
    { title: "Gallery", icon: <GallerySVG /> },
    { title: "Analytics", icon: <AnalyticsSVG /> },
    { title: "Settings", icon: <SettingsSVG /> },
  ];

  const [selected, setSelected] = useState(1);
  function handleChangeNav(e) {
    const liELement = e.target.closest("li");
    setSelected(Number(liELement.dataset.index));
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
          ))}
        </ul>
      </nav>
      <div className="modal-background hide"></div>
    </>
  );
}
