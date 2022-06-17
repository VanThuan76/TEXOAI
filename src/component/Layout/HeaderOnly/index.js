import { useContext, useState } from "react";
import classNames from "classnames/bind";
import style from "./HeaderOnly.module.scss";
import { Button, Menu, MenuItem } from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { AuthContext } from "~/component/Context/AuthProvider";
import Logo from "~/component/Layout/Logo";
import { auth } from "~/firebase/config";
const cx = classNames.bind(style);
function HeaderOnly() {
  const userName = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    auth.signOut();
  };
  return (
    <div className={cx("wrapper")}>
      <Logo></Logo>
      <div className={cx("main")}>
        <div className={cx("nav-bar")}>
          <div className={cx("projects")}>
            <DashboardOutlinedIcon
              className={cx("icon")}
            ></DashboardOutlinedIcon>
            <a href="#">All Projects</a>
          </div>
          <div className={cx("learn")}>
            <SchoolOutlinedIcon className={cx("icon")}></SchoolOutlinedIcon>
            <a href="#">Learn</a>
          </div>
        </div>
        <div className={cx("main-content")}>
          <button className={cx("btn-upgrade")}>Upgrade Plan</button>
          <div className={cx("information")}>
            <div className={cx("credit")}>
              <MonetizationOnOutlinedIcon
                className={cx("icon-small")}
              ></MonetizationOnOutlinedIcon>
              <p>20/ left this week</p>
            </div>
            <div className={cx("name")}>
              <h3>{userName.user.displayName}</h3>
              <div>
                <Button
                  id="fade-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <img src={userName.user.photoURL} alt="ADMIN"></img>
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem className={cx("menu-item")} onClick={handleClose}>
                    Profile
                  </MenuItem>
                  <MenuItem className={cx("menu-item")} onClick={handleClose}>
                    My account
                  </MenuItem>
                  <MenuItem
                    className={cx("menu-item")}
                    onClick={() => {
                      handleClose();
                      handleLogout();
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderOnly;
