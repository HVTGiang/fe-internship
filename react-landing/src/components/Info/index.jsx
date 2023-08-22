import { useSelector, useDispatch } from "react-redux";
import { editUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import "./style.scss";

export default function Info({ viewMode = "owner" }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const visitorAction = (
    <>
      <div className="action__mess">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM16 12H4V10H16V12ZM16 9H4V7H16V9ZM16 6H4V4H16V6Z"
            fill="white"
          />
        </svg>
      </div>
      <p className="action__follow">Follow</p>
      <p className="action__shedule">Shedule a meeting</p>
    </>
  );

  const ownerAction = (
    <p
      className="action__edit-profile"
      onClick={() => navigate("/profile-edit")}
    >
      Edit Profile
    </p>
  );

  function handleChangeCover(e) {
    dispatch(
      editUser({ ...user, imgCover: "./img/" + e.target.files[0].name })
    );
  }

  return (
    <div className="info">
      <div className="info__cover">
        <img src={user.imgCover} alt="People" />
        {viewMode === "owner" || viewMode === "edit" ? (
          <label htmlFor="info__edit-cover">
            <div className="info__edit-cover">Edit Cover Photo</div>
            <input
              type="file"
              hidden
              id="info__edit-cover"
              onChange={handleChangeCover}
              accept="image/png, image/gif, image/jpeg"
            />
          </label>
        ) : (
          ""
        )}

        {viewMode === "edit" ? (
          ""
        ) : (
          <div className="info__avt">
            <img src="./img/user_img.png" alt="Charles Deo" />
          </div>
        )}
      </div>

      {viewMode === "edit" ? (
        ""
      ) : (
        <div className="info__footer">
          <div className="info__text">
            <p className="info__name">Charles Deo</p>
            <p className="info__career">UI/UX Designer</p>
          </div>
          <div className="info__action">
            {viewMode === "owner" ? ownerAction : visitorAction}
          </div>
        </div>
      )}
    </div>
  );
}
