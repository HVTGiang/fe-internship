import { useEffect, useState } from "react";
import RecentPosts from "./RecentPosts";
import Thumbnail from "./Thumbnail";
import { Post } from "./Type";
import axios from "axios";
import ENDPOINTS from "../../api/endpoint";
import AllPosts from "./AllPosts";
import styled from "@emotion/styled";
import { Routes, Route } from "react-router-dom";
import DetailPost from "./DetailPost";

const Container = styled.div`
  padding-bottom: 150px;
  max-width: 1280px;
  margin: 0 auto;
  scroll-behavior: smooth;
`;

export const Posts = () => {
  const [posts, setPosts] = useState<Array<Post>>([]);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(ENDPOINTS.posts.allPosts);
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
    <Routes>
      <Route
        path=""
        element={
          <Container>
            <Thumbnail />
            <RecentPosts data={posts.slice(0, 4)} />
            <AllPosts data={posts.slice(4)} />
          </Container>
        }
      />
      <Route path="/:id" element={<DetailPost />} />
    </Routes>
  );
};
