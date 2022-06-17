import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import classNames from "classnames/bind";
import { useState } from "react";
import React from "react";
import style from "./Writing.module.scss";
const cx = classNames.bind(style);
function WritingItem({ data }) {
  const [countLetter, setCountLetter] = useState(0);
  const [tone, setTone] = useState("");
  const handleChange1 = (event) => {
    setTone(event.target.value);
  };
  const handleChangeCount = (event) => {
    setCountLetter(event.target.value.length);
  };
  return (
    <>
      {data.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {item[0] === "solidYoutube" ||
            item[0] === "solidYoutube1" ||
            item[0] === "solidYoutube2" ||
            item[0] === "product" ||
            item[0] === "productService" ||
            item[0] === "blogTitle" ||
            item[0] === "company" ||
            item[0] === "brand" ||
            item[0] === "solidFb" ||
            item[0] === "solidTw" ||
            item[0] === "keyword" ||
            item[0] === "solidLandingPage" ||
            item[0] === "solidLandingPage1" ||
            item[0] === "solidLandingPage2" ||
            item[0] === "solidMail" ||
            item[0] === "topics" ? (
              <div className={cx(`${item[0]}-writing`, "input-writing")}>
                <div className={cx("help-countLetter")}>
                  <label>{item[1]}</label>
                  <p>{countLetter} | 100</p>
                </div>
                <TextField
                  id="outlined-name"
                  onChange={handleChangeCount}
                  inputProps={{ maxLength: 100, style: { fontSize: 15 } }}
                ></TextField>
              </div>
            ) : item[0] === "shortDescription" ||
              item[0] === "serviceDescription" ? (
              <div className={cx(`${item[0]}-writing`, "input-writing")}>
                <div className={cx("help-countLetter")}>
                  <label>{item[1]}</label>
                  <p>{countLetter} | 400</p>
                </div>
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  onChange={handleChangeCount}
                  inputProps={{ maxLength: 400, style: { fontSize: 15 } }}
                />
              </div>
            ) : item[0] === "content" ||
              item[0] === "solidLinkIn" ||
              item[0] === "solidMail2" ? (
              <div className={cx(`${item[0]}-writing`, "input-writing")}>
                <div className={cx("help-countLetter")}>
                  <label>{item[1]}</label>
                  <p>{countLetter} | 400</p>
                </div>
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={6}
                  onChange={handleChangeCount}
                  inputProps={{ maxLength: 400, style: { fontSize: 15 } }}
                />
              </div>
            ) : item[0] === "description" ? (
              <div className={cx(`${item[0]}-writing`, "input-writing")}>
                <div className={cx("help-countLetter")}>
                  <label>{item[1]}</label>
                  <p>{countLetter} | 200</p>
                </div>
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  onChange={handleChangeCount}
                  inputProps={{ maxLength: 200, style: { fontSize: 15 } }}
                />
              </div>
            ) : item[0] === "tone" ? (
              <div className={cx(`${item[0]}-writing`, "input-writing")}>
                <label>{item[1]}</label>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tone}
                    onChange={handleChange1}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value={1}>🙂 Normal</MenuItem>
                    <MenuItem value={2}>😆 Friendly</MenuItem>
                    <MenuItem value={3}>😡 Angry</MenuItem>
                  </Select>
                </FormControl>
              </div>
            ) : (
              ""
            )}
          </React.Fragment>
        );
      })}
    </>
  );
}
export default WritingItem;
