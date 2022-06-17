import classNames from "classnames/bind";
import style from "./Button.module.scss";
const cx = classNames.bind(style);
function Button({ title = "Sign in", onClick }) {
  return (
    <button onClick={onClick} className={cx("button")}>
      {title}
    </button>
  );
}

export default Button;
