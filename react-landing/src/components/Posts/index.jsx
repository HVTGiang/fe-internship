import { useState } from "react";

import Post from "../Post";
import postData from "./data.json"

import "./style.scss";

export default function Posts({ data }) {

  const author = {
    name: data.firstName + " " + data.lastName,
    avt: data.img,
  }

  const { initPosts, followerPosts, followingPosts } = postData
  initPosts.forEach((i) => i.author = author)

  const [posts, setPosts] = useState(initPosts);

  function handleChangeTab(postType) {
    switch (postType) {
      case "Following":
        setPosts(followingPosts);
        break;
      case "Follower":
        setPosts(followerPosts);
        break;
      case "Posts":
        setPosts(initPosts);
        break;
      default:
        setPosts(initPosts);
        break;
    }
  }

  return (
    <div className="posts">
      <PostsHeader onChangeTab={handleChangeTab} />
      <div className="container-post">
        {posts.map((post) => (
          <Post post={post} key={post.id} isLikePost={false} />
        ))}
      </div>
    </div>
  );
}

function PostsHeader({ onChangeTab }) {
  const [selectedTab, setSelectedTab] = useState(2);
  const tabList = ["Follower", "Following", "Posts"];

  function handleChangeTab(e) {
    const liELement = e.target.closest("li.header__item");
    onChangeTab(tabList[+liELement.dataset.index]);
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
