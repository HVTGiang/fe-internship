import { toTimeAgo } from "../../utils";

export default function Comment({ comment }) {
  const time = toTimeAgo(new Date(Date.parse(comment.time)));
  let classList = ["comment"];
  if (comment.text.length <= 20) classList.push("comment--short");

  return (
    <div className={classList.join(" ")}>
      <div className="comment__avt">
        <img src={comment.user.avt} alt="" />
      </div>
      <div className="comment__content">
        <div className="comment__box">
          <p className="comment__name">{comment.user.name}</p>
          <p className="comment__text">{comment.text}</p>
        </div>
        <div className="comment__react">
          <p className="comment__like">Like</p>
          <p className="comment__reply">Reply</p>
          <p className="comment__public">{time}</p>
        </div>
      </div>
    </div>
  );
}
