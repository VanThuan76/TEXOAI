import classNames from "classnames/bind";
import style from "./Header.module.scss";
import Logo from "~/component/Layout/Logo";
const cx = classNames.bind(style);
function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <Logo></Logo>
      </div>
    </div>
  );
}

export default Header;
