import { useState } from "react";
import { Link } from "react-router-dom";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import classNames from "classnames/bind";
import style from "./ForgotPassword.module.scss";
import images from "~/assets";
import Header from "~/pages/Login/Header";
import Email from "~/pages/Login/Email";
import Password from "~/pages/Login/Password";
import Button from "~/pages/Login/Button";
import routes from "~/pages/Login/config/routes";
import firebase from "~/firebase/config";
import { auth, handleChangePassword } from "~/firebase/config";
const cx = classNames.bind(style);
function ForgotPassword() {
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const confilmPassword = {
    titleH: "Create New Password",
    titleB: "Confirm password",
    comment: "Enter a new password for login your account",
    placeholder1: "New password",
    placeholder2: "Confirm password",
  };
  const { renderEmail, valueEmail, setCheckFalse, checkFalse } = Email({
    placeholder: "Your email address",
    span: "We’ll send a recovery link to",
  });
  const newPassword = Password({
    placeholder: confilmPassword.placeholder1,
    type: confilmPassword.placeholder1 + "*",
  });
  const newPassword2 = Password({
    placeholder: confilmPassword.placeholder2,
    type: confilmPassword.placeholder2 + "*",
  });
  const inforRef = firebase.database().ref("users");
  const handleCheckMail = () => {
    if (valueEmail.trim() === "") {
      setCheckFalse(true);
    } else if (checkFalse) {
      setCheckFalse(true);
    }
    inforRef.on("value", (snapshot) => {
      snapshot.forEach(function (childSnapshot) {
        const value = childSnapshot.val();
        if (valueEmail === value.email) {
          setCheckFalse(false);
          setCheckEmail(true);
        } else {
          setCheckFalse(true);
        }
      });
    });
  };
  const handleConfirmPassword = () => {
    if (
      newPassword.valuePassword === "" ||
      newPassword2.valuePassword === "" ||
      newPassword.valuePassword !== newPassword2.valuePassword
    ) {
      newPassword.setCheckValue(true);
      newPassword2.setCheckValue(true);
    } else {
      setCheckPassword(true);
      newPassword.setCheckValue(false);
      newPassword2.setCheckValue(false);
      handleChangePassword(valueEmail).then(() => {
        console.log("done");
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {checkPassword ? (
        <div className={cx("ntf-success")}>
          <img
            className={cx("img")}
            src={images.changePassword}
            alt="Success"
          ></img>
          <div className={cx("title-success")}>
            <h2>Password change success</h2>
            <p>Your new password has been successfully saved</p>
          </div>
          <Link to={routes.backSignIn} className={cx("btn-logIn")}>
            <Button title="Log in"></Button>
          </Link>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={cx("content", {
            checkEmail,
          })}
        >
          <div className={cx("ct-inner")}>
            <LockOpenIcon className={cx("icon")}></LockOpenIcon>
            <Header
              title={checkEmail ? confilmPassword.titleH : "Can’t log in?"}
              comment={
                checkEmail
                  ? confilmPassword.comment
                  : "Restore access to your account"
              }
            ></Header>
          </div>
          {checkEmail ? (
            <>
              {newPassword.renderPassword}
              {newPassword2.renderPassword}
            </>
          ) : (
            <>{renderEmail}</>
          )}
          <Button
            title={checkEmail ? confilmPassword.titleB : "Reset Password"}
            onClick={checkEmail ? handleConfirmPassword : handleCheckMail}
          ></Button>
          <a href="#" className={cx("resend-email")}>
            Resend Email
          </a>
        </form>
      )}
    </>
  );
}

export default ForgotPassword;
