import { Routes, Route } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./Dashboard.module.scss";
import Slider from "~/pages/Dashboard/component/Slider";
import { publicRoutes } from "~/pages/Dashboard/routes";
import HeaderOnly from "~/component/Layout/HeaderOnly";
const cx = classNames.bind(style);
function Dashboard() {
  return (
    <>
      <HeaderOnly></HeaderOnly>
      <div className={cx("wrapper")}>
        <Slider></Slider>
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

export default Dashboard;
