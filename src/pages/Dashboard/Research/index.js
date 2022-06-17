import SearchIcon from "@mui/icons-material/Search";
import { Box, CircularProgress } from "@mui/material";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import style from "./Research.module.scss";
const cx = classNames.bind(style);
function Research() {
  const [search, setSearch] = useState("");
  const [lastSearch, setLastSearch] = useState("");
  const [showResult, setShowResult] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2f4980d178msh2a86e533229c5ecp103bb3jsne0c562ff1d67",
        "X-RapidAPI-Host": "google-search1.p.rapidapi.com",
      },
    };

    const fetchApi = async () => {
      try {
        const data = await fetch(
          `https://google-search1.p.rapidapi.com/google-search?hl=en&q=${search}&gl=us`,
          options
        );
        const response = await data.json();
        // response ? setIsLoading(false) : setIsLoading(true);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchApi();
  }, [lastSearch]);
  return (
    <>
      {isLoading ? (
        <div className={cx("wrapper-spinner")}>
          <Box className={cx("spinner")} sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      ) : (
        <div className={cx("wrap-research")}>
          {showResult ? "" : <h1>Keyword Research</h1>}
          <div className={cx("container-research", { showResult })}>
            {showResult ? (
              ""
            ) : (
              <h2>Add and monitor your domains with easy-to-use tools.</h2>
            )}
            <div className={cx("inner-research")}>
              <SearchIcon className={cx("icon")}></SearchIcon>
              <input onChange={handleSearch} className={cx("input")}></input>
              <button
                onClick={() => {
                  setIsLoading(true);
                  setLastSearch(search);
                }}
                className={cx("btn-search")}
              >
                Search
              </button>
            </div>
          </div>
          {showResult ? (
            <>
              <div className={cx("container-trendKey")}>
                <div className={cx("keyDifficulty")}></div>
                <div className={cx("keyVolume")}></div>
                <div className={cx("keyGlobal")}></div>
              </div>
              <div className={cx("container-somethingKey")}>
                <div className={cx("keyVideo")}></div>
                <div className={cx("keyWebsite")}></div>
              </div>
              <div className={cx("container-relateKey")}></div>
            </>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}

export default Research;
