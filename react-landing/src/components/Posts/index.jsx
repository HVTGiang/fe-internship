import { useState } from "react";
import Post from "../Post";
import "./style.scss";

export default function Posts() {
  const posts = [
    {
      id: 1,
      author: {
        name: "Charles Deo",
        avt: "./img/user_img.png",
      },
      time: "2023-07-28 10:50:00",
      image: "./img/post_img.png",
      text: "New Blazer out here... $500!!!!!!",
      react: {
        like: 1498,
        comment: 3000,
      },
    },
    {
      id: 2,
      author: {
        name: "Charles Deo",
        avt: "./img/user_img.png",
      },
      time: "2023-07-28 10:50:00",
      image: "./img/post_img.png",
      text: "New Blazer out here... $500!!!!!!",
      react: {
        like: 1498,
        comment: 3000,
      },
    },
  ];

  return (
    <div className="posts">
      <PostsHeader />
      <div className="container">
        {posts.map((post) => (
          <Post post={post} key={post.id} isLikePost={false} />
        ))}
      </div>
    </div>
  );
}

function PostsHeader() {
  const [selectedTab, setSelectedTab] = useState(2);
  const tabList = ["Follower", "Following", "Posts"];
  let classList = ["header__item"];

  function handleChangeTab(e) {
    const liELement = e.target.closest("li.header__item");
    setSelectedTab(Number(liELement.dataset.index));
  }

  return (
    <>
      <ul className="header">
        {tabList.map((tab, i) => (
          <li
            key={i}
            className={
              i === selectedTab
                ? "header__item header__item--selected"
                : "header__item"
            }
            data-index={i}
            onClick={(e) => {
              handleChangeTab(e);
            }}
          >
            <span>{tab}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
