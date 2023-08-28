import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import { Button, Alert, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Post, User } from "../Type";
import ENDPOINTS from "../../../api/endpoint";
import ActionButtons from "../ActionButtons";
import EditPost from "../DetailPost/EditPost";

const StyledPrimaryPost = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 / span 1;
  grid-row: 1 / span 3;
  /* border: 1px solid #000; */
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f7f7f7;
  }
`;

const PrimaryPostImage = styled.div`
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    max-height: 350px;
    object-fit: cover;
    object-position: top;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Content = styled.div`
  flex: 1 60%;
  .owner {
    color: #888;
  }
  .title {
    line-height: 30px;
    margin: 10px 0;
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

const PrimaryPost = ({ post }: { post: Post }) => {
  const [owner, setOwner] = useState<User>({} as User);
  const [isOpenSnackBar, setIsOpenSnackBar] = useState(false);
  const [message, setMessage] = useState("");
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
          setMessage("Success: Deleted post");
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
  const handleChangeMessage = (text: string) => {
    setMessage(text);
  };

  return (
    <StyledPrimaryPost onClick={handleNavigate}>
      <PrimaryPostImage>
        <img src="/img/primary-post.jpg" alt="" />
      </PrimaryPostImage>
      <Content>
        <p className="owner">{owner.name}</p>
        <h2 className="title">{post.title}</h2>
        <p className="body">{post.body}</p>
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

      <ActionButtons
        handleDelete={handleDelete}
        post={post}
        onOpenSnackBar={handleSnackBarOpen}
        onChangeMessage={handleChangeMessage}
      />
    </StyledPrimaryPost>
  );
};

export default PrimaryPost;
