import styled from "@emotion/styled";
import { Post, User } from "../Type";
import { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import { Button, Alert, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ENDPOINTS from "../../../api/endpoint";
import ActionButtons from "../ActionButtons";

const StyledItemPost = styled.div`
  background-color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

const ItemPostImage = styled.div`
  width: 100%;
  img {
    display: block;
    width: 100%;
    max-height: 150px;
    object-fit: cover;
  }
`;

const Content = styled.div`
  flex: 1;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .owner {
    color: #888;
  }
  .title,
  .desc {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    word-break: break-all;
  }
  .title {
    flex: 2;
  }
`;
const ItemPost = ({ post }: { post: Post }) => {
  const [isOpenSnackBar, setIsOpenSnackBar] = useState(false);
  const [message, setMessage] = useState("");

  const handleChangeMessage = (text: string) => {
    setMessage(text);
  };
  const navigate = useNavigate();
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
  const handleNavigate = () => {
    navigate("/posts/" + post.id);
  };
  return (
    <StyledItemPost onClick={handleNavigate}>
      <ItemPostImage>
        <img src="/img/placeholder.png" alt="" />
      </ItemPostImage>
      <Content>
        <p className="owner">{"Someone"}</p>
        <h2 className="title">{post.title}</h2>
        <p className="desc">{post.body}</p>
        <ActionButtons
          handleDelete={handleDelete}
          post={post}
          onOpenSnackBar={handleSnackBarOpen}
          onChangeMessage={handleChangeMessage}
        />
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
      </Content>
    </StyledItemPost>
  );
};
export default ItemPost;
