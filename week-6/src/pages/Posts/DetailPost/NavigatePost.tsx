import axios from "axios";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import ENDPOINTS from "../../../api/endpoint";
import { Post } from "../Type";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 150px;
`;

const NavigateButton = styled.div`
  /* flex: 1; */
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  .text {
    display: flex;
    flex-direction: column;
  }
  .right {
    align-items: flex-end;
  }
  .bold {
    font-weight: bold;
  }
`;

const NavigatePost = ({ currentPost }: { currentPost: number }) => {
  const [prev, setPrev] = useState<Post>();
  const [next, setNext] = useState<Post>();
  const navigate = useNavigate();
  const getPost = async (id: string | number) => {
    try {
      return axios.get(ENDPOINTS.posts.detailPosts + id);
    } catch (err) {
      console.log("Get post having some errors, post: " + id);
    }
  };
  const handleNavigateTo = (page: number) => {
    navigate(`/posts/${page}`);
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    const getData = async () => {
      if (currentPost > 1) {
        const response = await getPost(currentPost - 1);
        if (response && response.status === 200) {
          setPrev(response.data);
        }
      } else {
        setPrev(undefined);
      }
      if (currentPost < 100) {
        const response = await getPost(currentPost + 1);
        if (response && response.status === 200) {
          setNext(response.data);
        }
      } else setNext(undefined);
    };
    getData();
  }, [currentPost]);
  return (
    <Container>
      {prev ? (
        <NavigateButton onClick={() => handleNavigateTo(currentPost - 1)}>
          <ArrowBackIosNewIcon />
          <div className="text">
            <span>Previous</span>
            <span className="bold">{prev ? prev.title : ""}</span>
          </div>
        </NavigateButton>
      ) : (
        <div></div>
      )}
      {next ? (
        <NavigateButton onClick={() => handleNavigateTo(currentPost + 1)}>
          <div className="text right">
            <span>Next</span>
            <span className="bold">{next ? next.title : ""}</span>
          </div>
          <ArrowForwardIosIcon />
        </NavigateButton>
      ) : (
        <div></div>
      )}
    </Container>
  );
};
export default NavigatePost;
