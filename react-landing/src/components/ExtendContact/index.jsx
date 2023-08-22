import "./style.scss";
import data from "./data.json"
export default function ExtendContact() {
  const userList = data;

  return (
    <div className="con-extend">
      <p className="con-extend__title">You might know</p>
      <ul className="con-extend__list">
        {userList.map((user) => (
          <Item user={user} key={user.email} />
        ))}
      </ul>
    </div>
  );
}

function Item({ user }) {
  const { color, avt, name, email } = user
  const style = { backgroundColor: color };

  return (
    <li className="item">
      <div className="item__image" style={style}>
        <img src={"./img/" + avt} alt={name} />
      </div>
      <div className="item__info">
        <p className="item__name">{name}</p>
        <p className="item__email">{email}</p>
      </div>
    </li>
  );
}
