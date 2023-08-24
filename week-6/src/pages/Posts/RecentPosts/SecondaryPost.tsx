import { useEffect, useState } from "react";
import { Post, User } from "../Type";
import styled from "@emotion/styled";
import axios from "axios";
import ENDPOINTS from "../../../api/endpoint";

const SecondaryPostImage = styled.div`
  width: 40%;
  max-height: 180px;
  margin-right: 16px;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledSecondaryPost = styled.div`
  /* border: 1px solid #000; */
  display: flex;
  align-items: stretch;
  /* height: 100px; */
`;

const Content = styled.div`
  flex: 0 60%;
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

const SecondaryPost = ({ post }: { post: Post }) => {
  const [owner, setOwner] = useState<User>({} as User);
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          ENDPOINTS.user.detailUser + post.userId
        );
        console.log(response);
        if (response.status === 200) {
          setOwner(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [post]);
  return (
    <StyledSecondaryPost>
      <SecondaryPostImage>
        <img src="/img/primary-post.jpg" alt="" />
      </SecondaryPostImage>
      <Content>
        <p className="owner">{owner.name}</p>
        <h2 className="title">{post.title}</h2>
        <p className="body">{post.body}</p>
      </Content>
    </StyledSecondaryPost>
  );
};

export default SecondaryPost;
