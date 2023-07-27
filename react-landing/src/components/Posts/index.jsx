import "./style.scss";

export default function Posts() {
  return (
    <div className="posts">
      <PostHeader />
    </div>
  );
}

function PostHeader() {
  return (
    <ul className="header">
      <li className="header__item" data-index="0">
        <span>Followers</span>
      </li>
      <li className="header__item" data-index="1">
        <span>Following</span>
      </li>
      <li className="header__item header__item--selected" data-index="2">
        <span>Posts</span>
      </li>
    </ul>
  );
}
