import Comment from "./Comment";
import CommentBox from "./CommentBox";
import "./style.scss";
export default function Comments({ isShow = false }) {
  const commentsList = [
    {
      user: {
        name: "Beckham",
        avt: "./img/Beckam.png",
      },
      text: "Nice!!! wAY UGDUY",
      time: "2023-07-28 13:02:00",
    },
    {
      user: {
        name: "Kante",
        avt: "./img/Kente.png",
      },
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, to",
      time: "2023-07-28 12:51:00",
    },
  ];

  let classList = ["comments"];
  if (!isShow) {
    classList.push("comments--hide");
  }

  return (
    <div className={classList.join(" ")}>
      <CommentBox />
      {commentsList.map((comment, i) => (
        <Comment comment={comment} key={i} />
      ))}
      <div className="comments__more">View more comments</div>
    </div>
  );
}
