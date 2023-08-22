// import { useState } from "react";
import { toTimeAgo } from "../../utils";

export default function Comment({ comment }) {
  // const [time, setTime] = useState(Date.parse(comment.time));

  const time = Date.parse(comment.time)

  let timeAgo = toTimeAgo(time);

  // useEffect(() => {
  //   const timeRunnerID = setInterval(() => {
  //     setTime(time + 1000);
  //   }, 1000);

  //   return () => {
  //     clearInterval(timeRunnerID);
  //   };
  // }, [time]);

  let classList = ["comment"];
  if (comment.text.length <= 20) classList.push("comment--short");

  const { user, text } = comment

  return (
    <div className={classList.join(" ")}>
      <div className="comment__avt">
        <img src={user.avt} alt="" />
      </div>
      <div className="comment__content">
        <div className="comment__box">
          <p className="comment__name">{user.name}</p>
          <p className="comment__text">{text}</p>
        </div>
        <div className="comment__react">
          <p className="comment__like">Like</p>
          <p className="comment__reply">Reply</p>
          <p className="comment__public">{timeAgo}</p>
        </div>
      </div>
    </div>
  );
}
