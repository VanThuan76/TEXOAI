import { Checkbox } from "@mui/material";
import classNames from "classnames/bind";
import style from "./SignIn.module.scss";
import images from "~/assets";
import Header from "~/pages/Login/Header";
import Password from "~/pages/Login/Password";
import Email from "~/pages/Login/Email";
import Button from "~/pages/Login/Button";
import ForgotPassword from "~/pages/Login/ForgotPassword";
import SignUp from "~/pages/Login/SignUp";
import firebase, { auth } from "~/firebase/config";
import { handleLogin } from "~/firebase/config";
import { useState } from "react";
const cx = classNames.bind(style);
const googleProvider = new firebase.auth.GoogleAuthProvider();
function SignIn() {
  const handleGgLogin = () => {
    auth.signInWithPopup(googleProvider);
  };
  const { renderEmail, valueEmail, setCheckFalse, checkFalse } = Email({
    placeholder: "Enter your email",
  });
  const { renderPassword, valuePassword, setCheckValue } = Password({
    type: "Password*",
  });
  const { renderSignUp, setOpen } = SignUp();
  const handleSignIn = () => {
    if (valueEmail === "" && valuePassword === "") {
      setCheckFalse(true);
      setCheckValue(true);
    } else if (valueEmail.trim() !== "" && checkFalse) {
      setCheckFalse(true);
    } else if (valuePassword !== "") {
      setCheckValue(false);
    }
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const [forgotPassword, setForgotPassword] = useState(false);
  return (
    <>
      {forgotPassword ? (
        <ForgotPassword></ForgotPassword>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(valueEmail, valuePassword);
          }}
          className={cx("content")}
        >
          <Header
            title="Welcome Back 👏"
            comment="Have we meet before?"
          ></Header>
          <div className={cx("all")}>
            <button onClick={handleGgLogin} className={cx("sigIn-google")}>
              <img src={images.google} alt="Google"></img>
              <h4>Sign in with Google</h4>
            </button>
            <div className={cx("divide-signIn")}></div>
            <div className={cx("main-signIn")}>
              {renderEmail}
              {renderPassword}
              <div className={cx("function-signIn")}>
                <div className={cx("wrap-fc")}>
                  <Checkbox defaultChecked></Checkbox>
                  <p>Remember me</p>
                </div>
                <p
                  className={cx("link")}
                  onClick={() => setForgotPassword(true)}
                >
                  Forgot your password?
                </p>
              </div>
              <Button onClick={handleSignIn}></Button>
              <p className={cx("help-more")}>
                Dont have an account?
                <button onClick={handleSignUp}>Sign up</button>
                {renderSignUp}
              </p>
            </div>
          </div>
        </form>
      )}
    </>
  );
}

export default SignIn;
