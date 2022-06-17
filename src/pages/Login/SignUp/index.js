import { Box, Modal } from "@mui/material";
import { useState } from "react";
import classNames from "classnames/bind";
import style from "./SignUp.module.scss";
import images from "~/assets";
import Header from "~/pages/Login/Header";
import Password from "~/pages/Login/Password";
import Email from "~/pages/Login/Email";
import Button from "~/pages/Login/Button";
import NameUser from "~/pages/Login/NameUser";
import { handleSubmit } from "~/firebase/config";
const cx = classNames.bind(style);
function SignUp() {
  const { renderEmail, valueEmail, setCheckFalse } = Email({
    placeholder: "thuanvuvan76@gmail.com",
  });
  const { renderName, name, setCheckName } = NameUser();
  const password = Password({ type: "Password*" });
  const rePassword = Password({ type: "Re-Password*" });
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const arrayCheck = [
    setCheckName,
    setCheckFalse,
    password.setCheckValue,
    rePassword.setCheckValue,
  ];
  const arrayInput = [
    name,
    valueEmail,
    password.valuePassword,
    rePassword.valuePassword,
  ];
  const handleCheck = (e) => {
    arrayCheck.forEach((input, index) => {
      if (index === e) {
        const result = input(true);
        return result;
      }
    });
  };
  const handleSignUp = () => {
    arrayInput.forEach((input, index) => {
      if (input === "") {
        handleCheck(index);
      }
    });
    if (
      password.valuePassword !== rePassword.valuePassword ||
      password.valuePassword === "" ||
      rePassword.valuePassword === ""
    ) {
      password.setCheckValue(true);
      rePassword.setCheckValue(true);
    } else {
      password.setCheckValue(false);
      rePassword.setCheckValue(false);
    }
  };
  return {
    setOpen,
    renderSignUp: (
      <Modal
        className={cx("modal")}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={cx("box")}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (
                password.valuePassword === rePassword.valuePassword &&
                name.length <= 9
              ) {
                handleSubmit(valueEmail, password.valuePassword, name);
              } else {
                setCheckName(true);
              }
            }}
            className={cx("content")}
          >
            <Header
              title="Strat for free Today 👏"
              comment="Access to all features. No credit card required."
            ></Header>
            <div className={cx("all")}>
              <button className={cx("sigIn-google")}>
                <img src={images.google} alt="Google"></img>
                <h4>Sign in with Google</h4>
              </button>
              <div className={cx("divide-signUp")}></div>
              <div className={cx("main-signUp")}>
                {renderName}
                {renderEmail}
                {password.renderPassword}
                {rePassword.renderPassword}
                <div className={cx("function-signUp")}></div>
                <Button title="Sign Up" onClick={handleSignUp}></Button>
                <p className={cx("help-more")}>
                  Already have an account?
                  <button
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    ),
  };
}

export default SignUp;
