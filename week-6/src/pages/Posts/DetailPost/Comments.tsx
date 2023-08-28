import { Comment } from "../Type";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

import CommentComponent from "./Comment";
import AddComment from "./AddComment";

const Container = styled.div`
  margin: 50px auto;
  background-color: #f5f5f5;
  padding: 20px 150px;
`;
const Title = styled.h3``;
const List = styled.ul`
  margin-top: 20px;
`;
const Comments = ({ data }: { data: Array<Comment> }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <Title>{ t("posts.detail.comments") } </Title>
      <List>
        {data.map((item) => (
          <CommentComponent comment={item} />
        ))}
      </List>
      <AddComment />
    </Container>
  );
};

export default Comments;
