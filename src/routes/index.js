import routes from "~/config/routes";
import Dashboard from "~/pages/Dashboard";
import Login from "~/pages/Login";
import Home from "~/pages/Home";

const publicRoutes = [
  { path: routes.home, component: Home },
  { path: routes.dashboard, component: Dashboard },
  { path: routes.login, component: Login },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
