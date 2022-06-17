import images from "~/assets";
import classNames from "classnames/bind";
import style from "./Slider.module.scss";
const cx = classNames.bind(style);
const Google = () => {
  return (
    <>
      <img className={cx("icon-img")} src={images.googleSVG}></img>
    </>
  );
};
const Amazon = () => {
  return (
    <>
      <img className={cx("icon-img")} src={images.amazon}></img>
    </>
  );
};
const Mail = () => {
  return (
    <>
      <img className={cx("icon-img")} src={images.mail}></img>
    </>
  );
};
const Youtube = () => {
  return (
    <>
      <img className={cx("icon-img")} src={images.youtube}></img>
    </>
  );
};
const LinkIn = () => {
  return (
    <>
      <img className={cx("icon-img")} src={images.linkIn}></img>
    </>
  );
};
export { Google, Amazon, Mail, Youtube, LinkIn };
