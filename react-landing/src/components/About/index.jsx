import {
  ProfileSVG,
  BirthdaySVG,
  AddressSVG,
  MailSVG,
  PhoneSVG,
} from "../../assets/svg";
import "./style.scss";

export default function About() {
  return (
    <div className="about">
      <p className="about__title">About</p>
      <ul className="about__menu">
        <li className="item">
          <div className="item__icon">
            <ProfileSVG />
          </div>
          Male
        </li>
        <li className="item">
          <div className="item__icon">
            <BirthdaySVG />
          </div>
          Born June 26, 1980
        </li>
        <li className="item">
          <div className="item__icon">
            <AddressSVG />
          </div>
          2239 Hog Camp Road Schaumburg
        </li>
        <li className="item">
          <div className="item__icon">
            <MailSVG />
          </div>
          charles5182@ummoh.com
        </li>
        <li className="item">
          <div className="item__icon">
            <PhoneSVG />
          </div>
          33757005467
        </li>
      </ul>
    </div>
  );
}
