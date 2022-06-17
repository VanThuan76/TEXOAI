import classNames from "classnames/bind";
import style from "./Logo.module.scss";
import images from "~/assets";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);
function Logo() {
  return (
    <Link to={"/home"}>
      <div className={cx("wrapper")}>
        <img src={images.logo} alt="Logo"></img>
        <h1>TexoAI</h1>
      </div>
    </Link>
  );
}

export default Logo;
