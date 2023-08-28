import { Comment } from "../Type";
import styled from "@emotion/styled";

const Avatar = styled.div`
  flex: 0 50px;
  min-width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledComment = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  .email {
    font-size: 13px;
    color: #999;
  }
`;

const Comment = ({ comment }: { comment: Comment }) => {
  return (
    <StyledComment>
      <Avatar>
        <img src="/img/secondary-post-3.jpg" alt="" />
      </Avatar>
      <Content>
        <p className="email">{comment.email}</p>
        <h4 className="name">{comment.name}</h4>
        <p className="body">{comment.body}</p>
      </Content>
    </StyledComment>
  );
};

export default Comment;
