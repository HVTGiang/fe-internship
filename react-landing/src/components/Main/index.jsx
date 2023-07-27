import About from "../About";
import ExtendContact from "../ExtendContact";
import Header from "../Header";
import Info from "../Info";
import Posts from "../Posts";
import "./style.scss";

export default function Main() {
  return (
    <div id="main">
      <Header />
      <Info />
      <div className="content-group">
        <About />
        <Posts />
        <div className="contact">
          <ExtendContact />
        </div>
      </div>
    </div>
  );
}
