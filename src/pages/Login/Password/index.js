import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import { InputUnstyled } from "@mui/base";
import { useState } from "react";
import classNames from "classnames/bind";
import style from "./Password.module.scss";
const cx = classNames.bind(style);
function Password({ type, placeholder = "Enter your password" }) {
  const [checkValue, setCheckValue] = useState(null);
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setCheckValue(false);
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return {
    setCheckValue,
    valuePassword: values.password,
    renderPassword: (
      <div
        className={cx("password", {
          checkValue,
        })}
      >
        <span>{type}</span>
        <InputUnstyled
          required
          autoComplete="on"
          className={cx("input")}
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          placeholder={placeholder}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                className={cx("btn-input")}
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        ></InputUnstyled>
      </div>
    ),
  };
}

export default Password;
