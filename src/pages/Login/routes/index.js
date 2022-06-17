import routes from "~/pages/Login/config/routes";
import SignIn from "~/pages/Login/SignIn";
import ForgotPassword from "~/pages/Login/ForgotPassword";
const publicRoutes = [{ path: routes.signIn, component: SignIn }];
export default publicRoutes;
