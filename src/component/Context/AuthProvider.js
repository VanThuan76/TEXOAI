import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "~/firebase/config";
import { Box, CircularProgress } from "@mui/material";
import classNames from "classnames/bind";
import style from "./AuthProvider.module.scss";
const cx = classNames.bind(style);
export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({
          displayName,
          email,
          uid,
          photoURL,
        });
        setIsLoading(false);
        navigate("/dashboard");
      } else if (!user) {
        setIsLoading(false);
        navigate("/login");
      }
    });
    return () => {
      unsubscribe();
    };
  }, [navigate]);
  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? (
        <Box className={cx("spinner")} sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
