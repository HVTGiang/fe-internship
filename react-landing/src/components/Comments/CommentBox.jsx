import { SendSVG } from "../../assets/svg";
export default function CommentBox() {
  return (
    <div className="comment__input">
      <div className="user-image">
        <img src="./img/user_img.png" alt="Comment owner" />
      </div>
      <div className="input-box">
        <input type="text" placeholder="Write your comment..." />
        <SendSVG />
      </div>
    </div>
  );
}
