import { Routes, Route } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./Login.module.scss";
import publicRoutes from "~/pages/Login/routes";
import Header from "~/component/Layout/Header";
const cx = classNames.bind(style);
function Login() {
  return (
    <>
      <Header></Header>
      <div className={cx("wrapper")}>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Component = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={<Component></Component>}
              ></Route>
            );
          })}
        </Routes>
      </div>
    </>
  );
}

export default Login;
