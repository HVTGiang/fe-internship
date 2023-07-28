import { useState } from "react";
import Calendar from "./Calendar";
import CalendarSVG from "./CalendarSVG";

export default function Form() {
  const [data, setData] = useState({
    firstName: "Deo",
    lastName: "Charles",
    title: "UI/UX Designer",
    gender: "male",
    birthday: "1980-06-26",
    address: "2239 Hog Camp Road, Schaumburg",
    email: "charles5182@ummoh.com",
    phone: "33757005467",
  });

  return (
    <div className="form">
      <div className="form__action">
        <div className="form__cancel">Cancel</div>
        <div className="form__save">Save</div>
      </div>
      <form action="" className="form__container" id="profile-form">
        <div className="form__input-group">
          <div className="form__input">
            <label htmlFor="first-name">First Name</label>
            <input
              className="form__box"
              type="text"
              defaultValue={data.firstName}
              placeholder="Fill your first name"
              id="first-name"
              name="firstName"
              rules="required"
            />
            <span className="input__error">This is error!</span>
          </div>
          <div className="form__input">
            <label htmlFor="last-name">Last Name</label>
            <input
              className="form__box"
              type="text"
              defaultValue={data.lastName}
              placeholder="Fill your last name"
              id="last-name"
              name="lastName"
              rules="required"
            />
            <span className="input__error"></span>
          </div>
        </div>
        <div className="form__input-group">
          <div className="form__input">
            <label htmlFor="role">Title</label>
            <input
              className="form__box"
              type="text"
              defaultValue={data.title}
              placeholder="Fill your title"
              id="role"
              name="role"
              rules="required"
            />
            <span className="input__error"></span>
          </div>
        </div>
        <div className="form__input-group">
          <div className="form__input radio">
            <label>Gender</label>
            <div className="radio-container">
              <label htmlFor="male" className="input__desc">
                <input
                  className="form__radio"
                  type="radio"
                  defaultValue="male"
                  id="male"
                  name="gender"
                  defaultChecked={data.gender === "male" ? true : false}
                  rules="required"
                />
                <span>Male</span>
              </label>
              <label htmlFor="female" className="input__desc">
                <input
                  className="form__radio"
                  type="radio"
                  defaultValue="female"
                  id="female"
                  defaultChecked={data.gender === "female" ? true : false}
                  name="gender"
                  rules="required"
                />
                <span>Female</span>
              </label>
              <label htmlFor="other" className="input__desc">
                <input
                  className="form__radio"
                  type="radio"
                  defaultValue="other"
                  id="other"
                  defaultChecked={data.gender === "other" ? true : false}
                  name="gender"
                  rules="required"
                />
                <span>Other</span>
              </label>
            </div>
            <span className="input__error"></span>
          </div>
        </div>
        <div className="form__input-group">
          <div className="form__input invalid" id="input-calendar">
            <label htmlFor="birthday">Birthday</label>
            <div className="form__box birthday" name="birthday">
              <input
                hidden
                type="date"
                name="birthday"
                id="birthday"
                rules="required"
                defaultValue="1980-06-26"
              />
              <span>Chỗ này chưa sửa</span>
              <CalendarSVG />
            </div>
            <Calendar />
            <span className="input__error"></span>
          </div>
        </div>
        <div className="form__input-group">
          <div className="form__input">
            <label htmlFor="address">Address</label>
            <input
              className="form__box"
              type="text"
              defaultValue={data.address}
              placeholder="Fill your address"
              id="address"
              name="address"
              rules="required"
            />
            <span className="input__error"></span>
          </div>
        </div>
        <div className="form__input-group">
          <div className="form__input">
            <label htmlFor="email">Email</label>
            <input
              className="form__box"
              type="email"
              defaultValue={data.email}
              placeholder="Fill your email"
              id="email"
              name="email"
              rules="required email"
            />
            <span className="input__error"></span>
          </div>
        </div>
        <div className="form__input-group">
          <div className="form__input">
            <label htmlFor="phone">Phone Number</label>
            <input
              className="form__box"
              type="text"
              defaultValue={data.phone}
              placeholder="Fill your phone"
              id="phone"
              name="phone"
              rules="required phone"
            />
            <span className="input__error"></span>
          </div>
        </div>
      </form>
    </div>
  );
}
