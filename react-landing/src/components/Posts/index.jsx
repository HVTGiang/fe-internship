import { useState } from "react";
import Post from "../Post";
import "./style.scss";

export default function Posts() {
  const initPosts = [
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
      time: "2023-07-20 10:50:00",
      image: "./img/post_img_5.jpg",
      text: "Get it hight, touch the sky",
      react: {
        like: 697,
        comment: 1503,
      },
    },
  ];

  const followerPosts = [
    {
      id: 3,
      author: {
        name: "Eddie Lobanovskiy",
        avt: "./img/Kente.png",
      },
      time: "2023-07-30 10:50:00",
      image: "./img/post_img_2.png",
      text: "Such a beautiful whale",
      react: {
        like: 1957,
        comment: 832,
      },
    },
    {
      id: 4,
      author: {
        name: "Anton Tkacheve",
        avt: "./img/Anton.png",
      },
      time: "2023-07-14 10:50:00",
      image: "./img/post_img_3.png",
      text: "Relaxing with the green",
      react: {
        like: 1498,
        comment: 3000,
      },
    },
  ];
  const followingPosts = [
    {
      id: 5,
      author: {
        name: "David Beckam",
        avt: "./img/Beckam.png",
      },
      time: "2023-07-20 10:50:00",
      image: "./img/post_img_4.jpg",
      text: "I miss that journey",
      react: {
        like: 1257,
        comment: 674,
      },
    },
    {
      id: 6,
      author: {
        name: "John Carilo",
        avt: "./img/Robert_Bacins.png",
      },
      time: "2023-07-14 10:50:00",
      image: "./img/post_img_6.jpg",
      text: "Black pink in your area :3",
      react: {
        like: 4896,
        comment: 5034,
      },
    },
  ];

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
  let classList = ["header__item"];

  function handleChangeTab(e) {
    const liELement = e.target.closest("li.header__item");
    setSelectedTab(Number(liELement.dataset.index));
    onChangeTab(tabList[Number(liELement.dataset.index)]);
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
