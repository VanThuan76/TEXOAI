import classNames from "classnames/bind";
import style from "./Home.module.scss";
const cx = classNames.bind(style);
function Home() {
  return <div className={cx("wrapper")}></div>;
}

export default Home;
