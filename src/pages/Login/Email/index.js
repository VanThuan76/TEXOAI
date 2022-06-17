import { InputUnstyled } from "@mui/base";
import { useState } from "react";
import classNames from "classnames/bind";
import style from "./Email.module.scss";

const cx = classNames.bind(style);

function Email({ placeholder, span = "Email*" }) {
  const [checkFalse, setCheckFalse] = useState(false);
  const [valueEmail, setValueEmail] = useState("");
  const email = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  const handleChange = (value) => {
    setValueEmail(value);
    if (!email.test(value)) {
      setCheckFalse(true);
    } else if (email.test(value)) {
      setCheckFalse(false);
    }
  };
  return {
    setCheckFalse,
    valueEmail,
    renderEmail: (
      <div
        className={cx("email", {
          checkFalse,
        })}
      >
        <span>{span}</span>
        <InputUnstyled
          required
          value={valueEmail}
          onChange={(e) => handleChange(e.target.value)}
          className={cx("input")}
          placeholder={placeholder}
        ></InputUnstyled>
      </div>
    ),
  };
}

export default Email;
