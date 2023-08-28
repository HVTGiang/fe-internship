import { Button, TextField, Alert, Snackbar } from "@mui/material";
import { Post } from "../Type";
import styled from "@emotion/styled";
import { useState, useRef, ChangeEvent, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import ENDPOINTS from "../../../api/endpoint";
type Props = {
  open: boolean;
};
const Container = styled.div<Props>`
  cursor: auto;
  display: ${(props) => (props.open ? "flex" : "none")};
  position: fixed;
  width: auto;
  height: auto;
  z-index: 999;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #1c1c1c8a;
  align-items: center;
  justify-content: center;
`;
const Box = styled.div`
  width: 50%;
  padding: 20px;
  background-color: white;
  margin-top: 20px;
  border-radius: 5px;
`;
const EditForm = styled.div``;
const InputImage = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  .image-name {
    margin-bottom: 12px;
  }
`;
const ImagePreview = styled.div`
  overflow: hidden;
  width: 400px;
  height: 250px;
  background-color: #ccc;
  border-radius: 5px;
  img {
    display: block;
    width: 100%;
    object-fit: cover;
    object-position: center center;
    max-height: 300px;
  }
`;
const Action = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 16px;
  justify-content: flex-end;
`;
const EditPost = ({
  open,
  post,
  onSwapVisible,
  onSaveSuccess,
  onChangeMessage,
  mode,
}: {
  open: boolean;
  post: Post;
  onSwapVisible: any;
  onSaveSuccess: any;
  mode: "create" | "edit";
  [key: string]: any;
}) => {
  const { t } = useTranslation();
  const [data, setData] = useState({
    ...post,
    image: {
      link: "",
      name: "",
    },
  });
  function isEmpty(obj: object) {
    return Object.keys(obj).length === 0;
  }
  useEffect(() => {
    if (isEmpty(post)) {
      post = {
        body: "",
        title: "",
        id: 0,
        userId: 1,
      };
    }
    setData({
      ...post,
      image: {
        link: "",
        name: "",
      },
    });
  }, [open]);
  const imageInput = useRef(null);

  const handleChangeData = (key: string, value: string | number) => {
    setData({
      ...data,
      [key]: value,
    });
  };
  const handleUploadImage = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      setData({
        ...data,
        image: {
          link: URL.createObjectURL(files[0]),
          name: files[0].name,
        },
      });
    }
  };

  const handleCloseEditMode = () => {
    onSwapVisible();
    setData({
      ...post,
      image: {
        link: "",
        name: "",
      },
    });
  };
  const handleEditPost = () => {
    if (!data.body || !data.title) {
      console.log("here");
      console.log(data);
      return;
    } else {
      const editPost = async () => {
        try {
          let response;
          if (mode === "edit") {
            response = await axios.put(ENDPOINTS.posts.detailPosts + post.id, {
              title: data.title,
              body: data.body,
            });
          } else {
            response = await axios.post(ENDPOINTS.posts.detailPosts, {
              title: data.title,
              body: data.body,
              userId: 1,
            });
          }
          console.log(response);
          if (response.status === 200 || response.status === 201) {
            // console.log("Update OK");
            onSaveSuccess();
            onSwapVisible();
            if (response.status === 200)
              onChangeMessage(t("posts.message.edit-post-success"));
            else onChangeMessage(t("posts.message.add-post-success"));
          }
        } catch (err) {
          console.log("Update post failed");
        }
      };
      editPost();
    }
  };
  return (
    <Container
      open={open}
      onClick={(e) => {
        e.stopPropagation();
        handleCloseEditMode();
      }}
    >
      <Box
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>
          {mode === "create"
            ? t("posts.edit-post.add-title")
            : t("posts.edit-post.edit-title")}
        </h2>
        <EditForm>
          <TextField
            margin="normal"
            fullWidth
            label={t("posts.edit-post.title")}
            id="filled-hidden-label-small"
            // defaultValue={data.title}
            value={data.title}
            variant="outlined"
            size="small"
            onChange={(e) => handleChangeData("title", e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            multiline
            label={t("posts.edit-post.body")}
            id="filled-hidden-label-small"
            // defaultValue={data.body}
            value={data.body}
            variant="outlined"
            size="small"
            onChange={(e) => handleChangeData("body", e.target.value)}
          />
          <InputImage>
            <ImagePreview>
              <img src={data.image.link} alt="" />
            </ImagePreview>
            <input
              ref={imageInput}
              accept="image/*"
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
              onChange={handleUploadImage}
            />
            <label htmlFor="raised-button-file">
              <p className="image-name">
                {data.image ? data.image.name : "Choose an image for you post"}
              </p>
              <Button variant="contained" component="span">
                {t("posts.edit-post.upload")}
              </Button>
            </label>
          </InputImage>
          <Action>
            <Button
              variant="text"
              component="span"
              color="error"
              onClick={handleCloseEditMode}
            >
              {t("posts.edit-post.cancel")}
            </Button>
            <Button
              variant="contained"
              component="span"
              color="success"
              onClick={handleEditPost}
            >
              {t("posts.edit-post.save")}
            </Button>
          </Action>
        </EditForm>
      </Box>
    </Container>
  );
};
export default EditPost;
