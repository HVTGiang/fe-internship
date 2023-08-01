import { useSelector } from "react-redux";
import { SendSVG } from "../../assets/svg";
export default function CommentBox({ onComment }) {

  const userData = useSelector(state => state.user)
  const user = {
    name: `${userData.firstName} ${userData.lastName}`,
    avt: userData.img,
  };

  function handleComment(e) {
    const inputBox = e.target.closest(".input-box");
    const input = inputBox.querySelector("input");

    if (input.value === "") {
      return;
    }
    onComment({
      user,
      text: input.value,
      time: new Date(),
    });
    input.value = "";
  }

  return (
    <div className="comment__input">
      <div className="user-image">
        <img src={userData.img} alt="Comment owner" />
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Write your comment..."
          onKeyUp={(e) => {
            if (e.key === "Enter") handleComment(e);
          }}
        />
        <div
          className="send-icon"
          style={{ height: "18px" }}
          onClick={(e) => {
            handleComment(e);
          }}
        >
          <SendSVG />
        </div>
      </div>
    </div>
  );
}
