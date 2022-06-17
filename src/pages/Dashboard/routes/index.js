import routes from "~/pages/Dashboard/config/routes";
import AllProjects from "~/pages/Dashboard/AllProjects";
import Writing from "~/pages/Dashboard/Writing";
const publicRoutes = [
  { path: routes.projects, component: AllProjects },
  { path: routes.writing, component: Writing },
];
export { publicRoutes };
