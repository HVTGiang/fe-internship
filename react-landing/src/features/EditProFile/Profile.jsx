export default function Profile({}) {
  return (
    <div className="profile">
      <div className="profile__image">
        <img src="./img/user_img.png" alt="" />
      </div>
      <p className="profile__name">Charles Deo</p>
      <p className="profile__role">UI/UX Designer</p>
      <div className="profile__up-image">Upload photo</div>
    </div>
  );
}
