import classNames from "classnames/bind";
import style from "./Header.module.scss";
const cx = classNames.bind(style);
function Header({ title, comment }) {
  return (
    <div className={cx("top-title")}>
      <h1>{title}</h1>
      <p>{comment}</p>
    </div>
  );
}

export default Header;
