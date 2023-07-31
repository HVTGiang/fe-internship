import "./style.scss"
export default function Input() {
  return (
    <div class="root login">
      <header class="header">
        <div class="logo">
          <img src="./img/logo.png" alt="" />
          <span>3MM</span>
        </div>
        <div class="action">
          <i class="fa-solid fa-earth-americas"></i>
          <span class="signup">Sign up</span>
          <span class="signin">Sign in</span>
        </div>
      </header>
      <div class="container">
        <div class="image">
          <img src="./img/background.png" alt="" />
        </div>
        <div class="signup">
          <h2 class="signup__title">SIGN UP</h2>
          <form action="">
            <label for="signup-email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="signup-email"
              name="signup-email"
            />
            <label for="signup-password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              id="signup-password"
              name="signup-password"
            />
            <label for="signup-repassword">Repeat Password</label>
            <input
              type="password"
              placeholder="Repeat your password"
              id="signup-repassword"
              name="signup-repassword"
            />
            <input type="submit" value="Sign up" class="form__submit" />
          </form>
        </div>
        <div class="login">
          <h2 class="login__title">SIGN IN</h2>
          <form action="">
            <label for="login-email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="login-email"
              name="login-email"
            />
            <label for="login-password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              id="login-password"
              name="login-password"
            />
            <h2 class="form__forgot">Forgot password?</h2>
            <input type="submit" value="Sign in" class="form__submit" />
          </form>
          <div class="login__more">
            <p>Or login with</p>
            <div class="google">
              <span>Google</span>
              <i class="fa-brands fa-google"></i>
            </div>
            <div class="facebook">
              <span>Facebook</span>
              <i class="fa-brands fa-facebook-f"></i>
            </div>
          </div>
        </div>
        <div class="logo">
          <img src="./img/logo.png" alt="" />
        </div>
      </div>
    </div>
  );
}
