import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import styled from "@emotion/styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import ENDPOINTS from "../../../api/endpoint";
import { Comment, Post, User } from "../Type";
import { Button } from "@mui/material";
import Comments from "./Comments";
import EditPost from "./EditPost";
import { theme } from "../../../mui-config/theme";
import NavigatePost from "./NavigatePost";

const Container = styled.div`
  /* max-width: 1280px; */
  margin: 40px auto;
  padding-bottom: 100px;
  scroll-behavior: smooth;
`;
const Header = styled.div`
  flex: 2;
  .owner {
    color: #999;
    span {
      color: black;
    }
  }
  .title {
    &:first-letter {
      text-transform: uppercase;
    }
  }
`;
const Post = styled.div`
  /* width: 80%; */

  margin: 0 150px;
  display: flex;
  gap: 40px;
  padding: 20px;
  /* box-shadow: 4px 4px 5px 4px #ededed; */
  border-radius: 5px;
`;
const Content = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  .desc {
    /* font-size: 18px; */
    &:first-letter {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 40px;
    }
  }
`;
const EditButton = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 20px;
  .icons {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .icon {
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      color: ${theme.color.green2A};
    }
  }
`;
const Image = styled.div`
  flex: 1;
  overflow: hidden;
  margin-top: 16px;

  img {
    display: block;
    width: 100%;
    object-fit: cover;
    max-height: 500px;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
const DetailPost = () => {
  const { id } = useParams();
  console.log(id);
  const navigateTo = useNavigate();
  const [isSnackBarShow, setIsSnackBarShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const swapEditMode = () => {
    setEditMode((prev) => !prev);
  };
  const initData: {
    post: Post;
    owner: User;
    comments: Array<Comment>;
  } = { post: {} as Post, owner: {} as User, comments: [] };
  const [data, setData] = useState(initData);
  useEffect(() => {
    if (!id) {
      navigateTo("/posts");
    } else {
      if (isNaN(+id)) {
        navigateTo("/posts");
      }
    }
    const getInfo = async () => {
      try {
        const post = (await getPost(id!))?.data as Post;
        const comments = (await getComments(id!))?.data as Array<Comment>;
        const owner = (await getUser(post.userId))?.data as User;
        setData({
          post: post,
          comments: comments,
          owner: owner,
        });
        console.log(post);
      } catch (err) {
        console.log("Get info failed");
      }
    };
    getInfo();
  }, [id]);
  const handleCloseSnackBar = () => {
    setIsSnackBarShow(false);
  };
  const handleOpenSnackBar = () => {
    setIsSnackBarShow(true);
  };
  const getPost = async (id: string) => {
    try {
      return axios.get(ENDPOINTS.posts.detailPosts + id);
    } catch (err) {
      console.log("Get post having some errors, post: " + id);
    }
  };
  const getUser = async (id: string | number) => {
    try {
      return axios.get(ENDPOINTS.user.detailUser + id);
    } catch (err) {
      console.log("Get user having some errors, userID: " + id);
    }
  };
  const getComments = async (id: string) => {
    try {
      return axios.get(
        ENDPOINTS.posts.detailPosts + id + ENDPOINTS.posts.commentsPostfix
      );
    } catch (err) {
      console.log("Get comments having some errors, post: " + id);
    }
  };
  const { owner, post, comments } = data;
  return (
    <Container>
      <Post>
        <Header>
          <h1 className="title">{post.title}</h1>
          <p className="owner">
            By <span>{owner.name}</span>
          </p>
          <Image>
            <img src="/img/secondary-post-1.jpg" alt="" />
          </Image>
        </Header>
        <Content>
          <p className="desc">
            {post.body}
            {post.body}
            <br />
            <br />
            {post.body}
            {post.body}
            {post.body}
          </p>
          <EditButton>
            <div className="icons">
              <FacebookIcon className="icon" />
              <TwitterIcon className="icon" />
              <InstagramIcon className="icon" />
            </div>
            <Button
              variant="outlined"
              color="info"
              disableElevation
              onClick={swapEditMode}
            >
              Edit
            </Button>
          </EditButton>
        </Content>
      </Post>
      <Comments data={comments} />
      <EditPost
        mode="edit"
        open={editMode}
        post={post}
        onSwapVisible={swapEditMode}
        onSaveSuccess={handleOpenSnackBar}
      />
      <Snackbar
        open={isSnackBarShow}
        onClose={handleCloseSnackBar}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Success: Edited post!
        </Alert>
      </Snackbar>
      <NavigatePost currentPost={id ? +id : 0} />
    </Container>
  );
};
export default DetailPost;
