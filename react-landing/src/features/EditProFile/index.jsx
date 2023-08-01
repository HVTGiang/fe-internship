import Form from "./Form";
import Profile from "./Profile";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { editUser } from "../../redux/userSlice";

export default function EditProfile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function handleChangeUserInfo(user) {
    dispatch(editUser(user));
  }

  return (
    <div className="container">
      <Profile data={user} onChangeImg={handleChangeUserInfo} />
      <Form data={user} onSubmitForm={handleChangeUserInfo} />
    </div>
  );
}
