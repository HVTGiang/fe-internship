import {
  ProfileSVG,
  BirthdaySVG,
  AddressSVG,
  MailSVG,
  PhoneSVG,
} from "../../assets/svg";
import "./style.scss";

export default function About({ data }) {

  var gender;
  switch (data.gender) {
    case "male":
      gender = "Male"
      break
    case "female":
      gender = "Female"
      break
    default:
      gender = "Other"
      break
  }

  var birthdayString = "Born "
  var userBirthday = new Date(data.birthday)
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  birthdayString += `${months[userBirthday.getMonth()]} `
  birthdayString += `${userBirthday.getDate()}, `
  birthdayString += `${userBirthday.getFullYear()}`

  return (
    <div className="about">
      <p className="about__title">About</p>
      <ul className="about__menu">
        <li className="item">
          <div className="item__icon">
            <ProfileSVG />
          </div>
          {gender}
        </li>
        <li className="item">
          <div className="item__icon">
            <BirthdaySVG />
          </div>
          {birthdayString}
        </li>
        <li className="item">
          <div className="item__icon">
            <AddressSVG />
          </div>
          {data.address}
        </li>
        <li className="item">
          <div className="item__icon">
            <MailSVG />
          </div>
          {data.email}
        </li>
        <li className="item">
          <div className="item__icon">
            <PhoneSVG />
          </div>
          {data.phone}
        </li>
      </ul>
    </div>
  );
}
