import "./style.scss";

export default function ExtendContact() {
  const userList = [
    {
      name: "Eddie Lobanovskiy",
      email: "laboanovskiy@gmail.com",
      avt: "Eddie_Lobanovskiy.png",
      color: "#d5d3ff",
    },
    {
      name: "Alexey Stave",
      email: "alexeyst@gmail.com",
      avt: "Alexey.png",
      color: "#ee37ff33",
    },
    {
      name: "Anton Tkacheve",
      email: "tkacheveanton@gmail.com",
      avt: "Anton.png",
      color: "#26c0e233",
    },
  ];

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
  const style = { backgroundColor: user.color };

  return (
    <li className="item">
      <div className="item__image" style={style}>
        <img src={"./img/" + user.avt} alt={user.name} />
      </div>
      <div className="item__info">
        <p className="item__name">{user.name}</p>
        <p className="item__email">{user.email}</p>
      </div>
    </li>
  );
}
