import { useState } from "react";
import Comment from "./Comment";
import CommentBox from "./CommentBox";
import "./style.scss";
import data from "./data.json";
export default function Comments({ isShow = false }) {

  const initialCommentList = data.comments

  const [commentsList, setCommentsList] = useState(initialCommentList);

  let classList = ["comments"];
  if (!isShow) {
    classList.push("comments--hide");
  }

  function handleComment(comment) {
    setCommentsList(prevList => [...prevList, comment]);
  }

  return (
    <div className={classList.join(" ")}>
      <CommentBox onComment={handleComment} />
      {commentsList.map((comment, i) => (
        <Comment comment={comment} key={i} />
      ))}
      <div className="comments__more">View more comments</div>
    </div>
  );
}
