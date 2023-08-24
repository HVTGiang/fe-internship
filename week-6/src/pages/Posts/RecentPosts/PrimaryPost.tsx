import { useEffect, useState } from "react";
import { Post, User } from "../Type";
import styled from "@emotion/styled";
import ENDPOINTS from "../../../api/endpoint";
import axios from "axios";

const StyledPrimaryPost = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 3;
  /* border: 1px solid #000; */
`;

const PrimaryPostImage = styled.div`
  width: 100%;
  margin-bottom: 20px;
  img {
    display: block;
    width: 100%;
    max-height: 350px;
    object-fit: cover;
    object-position: top;
  }
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

const PrimaryPost = ({ post }: { post: Post }) => {
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
    <StyledPrimaryPost>
      <PrimaryPostImage>
        <img src="/img/primary-post.jpg" alt="" />
      </PrimaryPostImage>
      <Content>
        <p className="owner">{owner.name}</p>
        <h2 className="title">{post.title}</h2>
        <p className="body">{post.body}</p>
      </Content>
    </StyledPrimaryPost>
  );
};

export default PrimaryPost;
