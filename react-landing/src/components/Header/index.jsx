import "./style.scss";

export default function Header() {
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
          <p className="user__name">Charles Deo</p>
          <p className="user__logout">Log out</p>
        </div>
        <div className="user__img">
          <img src="./img/user_img.png" alt="Charles Deo" />
        </div>
      </div>
    </div>
  );
}
