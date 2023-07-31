import { SendSVG } from "../../assets/svg";
export default function CommentBox({ onComment }) {
  const user = {
    name: "Charles Deo",
    avt: "./img/user_img.png",
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
        <img src="./img/user_img.png" alt="Comment owner" />
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
