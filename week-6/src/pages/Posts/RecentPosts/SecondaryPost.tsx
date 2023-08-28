import { useEffect, useState } from "react";
import { Post, User } from "../Type";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Alert, Snackbar } from "@mui/material";

import ENDPOINTS from "../../../api/endpoint";
import ActionButtons from "../ActionButtons";

const SecondaryPostImage = styled.div`
  width: 40%;
  max-height: 180px;
  margin-right: 16px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const StyledSecondaryPost = styled.div`
  /* border: 1px solid #000; */
  display: flex;
  align-items: stretch;
  /* height: 100px; */
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f7f7f7;
  }
`;

const Content = styled.div`
  flex: 0 60%;
  display: flex;
  flex-direction: column;
  .owner {
    color: #888;
  }
  .title {
    line-height: 30px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    word-break: break-all;
    white-space: pre-wrap;
  }
  .body {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    word-break: break-all;
    white-space: pre-wrap;
  }
`;

const SecondaryPost = ({ post }: { post: Post }) => {
  const [owner, setOwner] = useState<User>({} as User);
  const [isOpenSnackBar, setIsOpenSnackBar] = useState(false);
  const [message, setMessage] = useState("");
  
  const handleChangeMessage = (text: string) => {
    setMessage(text);
  };
  const navigateTo = useNavigate();
  const handleNavigate = () => {
    navigateTo("/posts/" + post.id);
  };
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          ENDPOINTS.user.detailUser + post.userId
        );
        if (response.status === 200) {
          setOwner(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [post]);

  const handleDelete = () => {
    const deletePost = async () => {
      try {
        const response = await axios.delete(ENDPOINTS.posts.allPosts + post.id);
        if (response.status === 200) {
          console.log("Deleted");
          setIsOpenSnackBar(true);
        }
      } catch (err) {
        console.log("Delete error");
      }
    };
    deletePost();
  };

  const handleSnackBarClose = () => {
    setIsOpenSnackBar(false);
  };
  const handleSnackBarOpen = () => {
    setIsOpenSnackBar(true);
  };
  return (
    <StyledSecondaryPost onClick={handleNavigate}>
      <SecondaryPostImage>
        <img src="/img/primary-post.jpg" alt="" />
      </SecondaryPostImage>
      <Content>
        <p className="owner">{owner.name}</p>
        <h3 className="title">{post.title}</h3>
        <p className="body">{post.body}</p>
        <ActionButtons
          handleDelete={handleDelete}
          post={post}
          onOpenSnackBar={handleSnackBarOpen}
          onChangeMessage={handleChangeMessage}
        />
      </Content>
      <Snackbar
        open={isOpenSnackBar}
        onClose={handleSnackBarClose}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </StyledSecondaryPost>
  );
};

export default SecondaryPost;
