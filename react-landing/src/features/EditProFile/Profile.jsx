import { useState } from "react";

export default function Profile({ data, onChangeImg }) {
  const user = { ...data };

  function handleUploadImage(e) {
    if (e.target.files.length > 0)
      onChangeImg({
        ...user,
        img: "./img/" + e.target.files[0].name,
      });
  }

  return (
    <div className="profile">
      <div className="profile__image">
        <img src={user.img} alt="" />
      </div>
      <p className="profile__name">{user.firstName + " " + user.lastName}</p>
      <p className="profile__role">{user.title}</p>
      <label htmlFor="profile__up-image">
        <div className="profile__up-image">Upload photo</div>
      </label>
      <input
        onChange={(e) => handleUploadImage(e)}
        type="file"
        accept="image/png, image/gif, image/jpeg"
        id="profile__up-image"
        hidden
      />
    </div>
  );
}
