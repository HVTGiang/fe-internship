import { useEffect } from "react";

import Calendar from "./Calendar.jsx";

import calendarHandler from "./calendarHandler.js";
import CalendarSVG from "./CalendarSVG";
import validator from "./validate.js";

export default function Form({ data, onSubmitForm }) {
  const user = { ...data };
  var validatorHelper;

  function handleSubmit(e) {
    // TODO: Check validation of input
    if (validatorHelper.isAllValid() === true) {
      const newUserData = validatorHelper.getFormData();
      onSubmitForm({ ...user, ...newUserData });
    } else {
    }
  }

  useEffect(() => {
    calendarHandler();
  }, []);

  useEffect(() => {
    validatorHelper = validator("#profile-form");
  }, [data]);

  const { firstName, lastName, title, gender, birthday, address, email, phone } = user

  return (
    <div className="form">
      <div className="form__action">
        <div className="form__cancel">Cancel</div>
        <div className="form__save" onClick={(e) => handleSubmit(e)}>
          Save
        </div>
      </div>
      <form action="" className="form__container" id="profile-form">
        <div className="form__input-group">
          <div className="form__input">
            <label htmlFor="first-name">First Name</label>
            <input
              className="form__box"
              type="text"
              defaultValue={firstName}
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
              defaultValue={lastName}
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
            <label htmlFor="title">Title</label>
            <input
              className="form__box"
              type="text"
              defaultValue={title}
              placeholder="Fill your title"
              id="title"
              name="title"
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
                  defaultChecked={gender === "male" ? true : false}
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
                  defaultChecked={gender === "female" ? true : false}
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
                  defaultChecked={gender === "other" ? true : false}
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
          <div className="form__input" id="input-calendar">
            <label htmlFor="birthday">Birthday</label>
            <div className="form__box birthday" name="birthday">
              <input
                hidden
                type="date"
                name="birthday"
                id="birthday"
                rules="required"
                defaultValue={birthday}
              />
              <span></span>
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
              defaultValue={address}
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
              defaultValue={email}
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
              defaultValue={phone}
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
