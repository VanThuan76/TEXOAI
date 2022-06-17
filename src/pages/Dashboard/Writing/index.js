import classNames from "classnames/bind";
import style from "./Writing.module.scss";
import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import WritingItem from "./WritingItem";
import Research from "~/pages/Dashboard/Research";
const cx = classNames.bind(style);
const spanTopic = [
  {
    head: "Project Name *",
    lang: "Language",
    tone: "Choose a tone",
    topics: "Topic *",
  },
  {
    head: "Project Name *",
    lang: "Language",
    tone: "Choose a tone",
    topics: "Topic *",
  },
  {
    head: "Project Name *",
    lang: "Language",
    blogTitle: "Blog Title *",
    description: "Description *",
    keyword: "Keywords *",
  },
  {
    head: "Project Name *",
    lang: "Language",
    brand: "Product Name/Brand *",
    solidFb: "Occasion",
    description: "Description *",
  },
  {
    head: "Project Name *",
    lang: "Language",
    brand: "Product Name/Brand *",
    description: "Description *",
    solidTw: "Hashtags *",
  },
  {
    head: "Project Name *",
    lang: "Language",
    tone: "Choose a tone",
    content: "Content *",
  },
  {
    head: "Project Name *",
    lang: "Language",
    blogTitle: "Blog Title *",
    description: "Description *",
    keyword: "Keywords *",
  },
  {
    head: "Project Name *",
    lang: "Language",
    productService: "Product/Service Name *",
    serviceDescription: "Product/Service Description *",
    solidLandingPage: "Benefit/Features 1 *",
    solidLandingPage1: "Benefit/Features 2 *",
    solidLandingPage2: "Benefit/Features 3 *",
  },
  {
    head: "Project Name *",
    lang: "Language",
    tone: "Choose a tone",
    serviceDescription: "Product/Service Description *",
  },
  {
    head: "Project Name *",
    lang: "Language",
    product: "Product Name *",
    shortDescription: "Short Description *",
  },
  {
    head: "Project Name *",
    lang: "Language",
    productService: "Product/Service Name *",
    serviceDescription: "Product/Service Description *",
  },
  {
    head: "Project Name *",
    lang: "Language",
    keyword: "Keywords *",
    productService: "Product/Service Name *",
    serviceDescription: "Product/Service Description *",
  },
  {
    head: "Project Name *",
    lang: "Language",
    product: "Product Name *",
    shortDescription: "Short Description *",
  },
  {},
  {
    head: "Project Name *",
    lang: "Language",
    company: "Company Name *",
    solidLinkIn: "Product/Service Description *",
    keyword: "Keywords *",
  },
  {
    head: "Project Name *",
    lang: "Language",
    solidYoutube: "Video Title *",
    solidYoutube1: "Search Term *",
    solidYoutube2: "Short Story *",
    keyword: "Keywords *",
  },
  {
    head: "Project Name *",
    lang: "Language",
    solidMail: "To *",
    solidMail1: "Who is sending this email?",
    solidMail2: "Purpose *",
  },
];
function Writing({ data, position }) {
  const Icon = data.icon;
  const [language, setLanguage] = useState("");
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  const ArrayData = Object.keys(spanTopic[position]).map((key) => [
    key,
    spanTopic[position][key],
  ]);
  return (
    <>
      {position === 13 ? (
        <Research></Research>
      ) : (
        <>
          <div className={cx("wrapper")}>
            <div className={cx("container-writing")}>
              <div className={cx("head")}>
                <h2>{data.headline}</h2>
                <Icon className={cx(`${data.style}`, "icon-topic")}></Icon>
              </div>
              <p>{data.title}</p>
              <div className={cx("inner-writing")}>
                <div className={cx("head-writing", "input-writing")}>
                  <label>{spanTopic[position].head}</label>
                  <TextField
                    id="outlined-name"
                    onChange={handleChange}
                    inputProps={{ style: { fontSize: 15 } }}
                  ></TextField>
                </div>
                <div className={cx("lang-writing", "input-writing")}>
                  <label>{spanTopic[position].lang}</label>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={language}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value={1}>🇺🇸 English</MenuItem>
                      <MenuItem value={2}>🇻🇳 VietNamese</MenuItem>
                      <MenuItem value={3}>🇮🇳 India</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <WritingItem data={ArrayData}></WritingItem>
                <div className={cx("generate", "input-writing")}>Generate</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Writing;
