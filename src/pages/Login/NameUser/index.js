import { InputUnstyled } from "@mui/base";
import { useState } from "react";
import classNames from "classnames/bind";
import style from "./NameUser.module.scss";
const cx = classNames.bind(style);
function NameUser() {
  const [name, setName] = useState("");
  const [checkName, setCheckName] = useState(false);
  const handleName = (e) => {
    setCheckName(false);
    setName(e.target.value);
    if (name.length <= 9) {
      setCheckName(false);
    } else {
      setCheckName(true);
    }
  };
  return {
    name,
    setCheckName,
    renderName: (
      <div
        className={cx("nameUser", {
          checkName,
        })}
      >
        <span>Full Name*</span>
        <InputUnstyled
          required
          value={name}
          onChange={(e) => {
            handleName(e);
          }}
          className={cx("input")}
          placeholder="VanThuan"
        ></InputUnstyled>
      </div>
    ),
  };
}

export default NameUser;
