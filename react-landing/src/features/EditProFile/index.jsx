import Form from "./Form";
import Profile from "./Profile";
import "./style.scss";

export default function EditProfile() {
  return (
    <div className="container">
      <Profile />
      <Form />
    </div>
  );
}
