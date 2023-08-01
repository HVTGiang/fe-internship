import "./style.scss"
import handleAuthenForm from "./authen"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../redux/userSlice";

export default function Input() {

  const [emailSI, setEmailSI] = useState("")
  const [passwordSI, setPasswordSI] = useState("")
  const [emailSU, setEmailSU] = useState("")
  const [passwordSU, setPasswordSU] = useState("")
  const [rePasswordSU, setRePasswordSU] = useState("")

  const navigate = useNavigate()
  const fakeUser1 = {
    firstName: "Charles",
    lastName: "Deo",
    title: "UI/UX Designer",
    gender: "male",
    birthday: "1980-06-26",
    address: "2239 Hog Camp Road, Schaumburg",
    email: "charles5182@ummoh.com",
    phone: "33757005467",
    img: "./img/user_img.png",
    imgCover: "./img/info_cover.png",
  }

  const fakeUser2 = {
    firstName: "Eddie",
    lastName: "Lobano",
    title: "Manager",
    gender: "male",
    birthday: "1987-06-26",
    address: "2239 Hog Camp Road, US",
    email: "eddie@ummoh.com",
    phone: "33757005467",
    img: "./img/avatar.jpg",
    imgCover: "./img/post_img_3.png",
  }
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    handleAuthenForm()
  }, [])

  function handleSignUp(e) {
    e.preventDefault()
  }

  function handleSignIn(e) {
    e.preventDefault()
    if (emailSI === "charles5182@ummoh.com" && passwordSI === "123") {
      dispatch(editUser({ ...user, ...fakeUser1 }))
      navigate("/")
    }
    else if (emailSI === "eddie@ummoh.com" && passwordSI === "123") {
      dispatch(editUser({ ...user, ...fakeUser2 }))
      navigate("/")
    }
    else {
      alert("Check your login info")
    }
  }

  return (
    <div className="root login">
      <header className="header">
        <div className="logo">
          <img src="./img/logo.png" alt="" />
          <span>3MM</span>
        </div>
        <div className="action">
          <i className="fa-solid fa-earth-americas"></i>
          <span className="signup">Sign up</span>
          <span className="signin">Sign in</span>
        </div>
      </header>
      <div className="container">
        <div className="image">
          <img src="./img/background.png" alt="" />
        </div>
        <div className="signup">
          <h2 className="signup__title">SIGN UP</h2>
          <form action="" onSubmit={handleSignUp}>
            <label htmlFor="signup-email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="signup-email"
              name="signup-email"
            />
            <label htmlFor="signup-password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              id="signup-password"
              name="signup-password"
            />
            <label htmlFor="signup-repassword">Repeat Password</label>
            <input
              type="password"
              placeholder="Repeat your password"
              id="signup-repassword"
              name="signup-repassword"
            />
            <input type="submit" value="Sign up" className="form__submit" />
          </form>
        </div>
        <div className="login">
          <h2 className="login__title">SIGN IN</h2>
          <form action="" onSubmit={handleSignIn}>
            <label htmlFor="login-email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="login-email"
              name="login-email"
              onInput={(e) => setEmailSI(e.target.value)}
            />
            <label htmlFor="login-password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              id="login-password"
              name="login-password"
              onInput={(e) => setPasswordSI(e.target.value)}
            />
            <h2 className="form__forgot">Forgot password?</h2>
            <input type="submit" value="Sign in" className="form__submit" />
          </form>
          <div className="login__more">
            <p>Or login with</p>
            <div className="google">
              <span>Google</span>
              <i className="fa-brands fa-google"></i>
            </div>
            <div className="facebook">
              <span>Facebook</span>
              <i className="fa-brands fa-facebook-f"></i>
            </div>
          </div>
        </div>
        <div className="logo">
          <img src="./img/logo.png" alt="" />
        </div>
      </div>
    </div>
  );
}
