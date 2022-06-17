import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
import AuthProvider from "./component/Context/AuthProvider";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={<Page></Page>}
              ></Route>
            );
          })}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
