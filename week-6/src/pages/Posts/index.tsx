import { useEffect, useState } from "react";
import RecentPosts from "./RecentPosts";
import Thumbnail from "./Thumbnail";
import { Post } from "./Type";
import axios from "axios";
import ENDPOINTS from "../../api/endpoint";

export const Posts = () => {
  const [posts, setPosts] = useState<Array<Post>>([]);
  console.log(posts);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(ENDPOINTS.posts.allPosts);
        console.log(response);
        if (response.status == 200) {
          setPosts([...response.data]);
          // console.log(response);
        }
      } catch (err) {
        console.log("GET POSTS IS ERRORED: " + err);
      }
    };
    getPosts();
  }, []);

  return (
    <div>
      <Thumbnail />
      <RecentPosts data={posts} />
    </div>
  );
};
