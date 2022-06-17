import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import OpenWithOutlinedIcon from "@mui/icons-material/OpenWithOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useReducer, useState, useContext } from "react";
import { Google, Amazon, Mail, Youtube, LinkIn } from "./iconImg";
import { AuthContext } from "~/component/Context/AuthProvider";
import classNames from "classnames/bind";
import style from "./Slider.module.scss";
import Writing from "~/pages/Dashboard/Writing";
const cx = classNames.bind(style);
const buttonCt = [
  "All",
  "Article and Blog",
  "Social Media",
  "Writing",
  "Keyword Research",
  "Ecommerce",
  "Website",
];
const topics = [
  {
    icon: NoteAltOutlinedIcon,
    headline: "Blog Idea",
    title: "Blog ideas generate more website traffic.",
    key_id: "1",
    style: "primary",
    position: 0,
  },
  {
    icon: NoteAltOutlinedIcon,
    headline: "Blog Intro",
    title: "Start write compelling introduction",
    key_id: "1",
    style: "primary",
    position: 1,
  },
  {
    icon: NoteAltOutlinedIcon,
    headline: "Article Generator",
    title: "Generate more copies with article AI",
    key_id: "1",
    style: "primary",
    position: 2,
  },
  {
    icon: FacebookOutlinedIcon,
    headline: "Facebook Ads",
    title: "Facebooks ad copies that make your ads.",
    key_id: "2",
    style: "facebook",
    position: 3,
  },
  {
    icon: TwitterIcon,
    headline: "Tweet Ideas",
    title: "Engage with your amazing followers",
    key_id: "2",
    style: "tweet",
    position: 4,
  },
  {
    icon: ReplayOutlinedIcon,
    headline: "Content Rephrase",
    title: "Rephrase your content in different voice.",
    key_id: "3",
    style: "replay",
    position: 5,
  },
  {
    icon: Google,
    headline: "SEO Meta Description",
    title: "Your website for maximum visibility",
    key_id: "6",
    position: 6,
  },
  {
    icon: PublicOutlinedIcon,
    headline: "Landing Page",
    title: "Tailor high-converting landing page copies",
    key_id: "6",
    style: "primary",
    position: 7,
  },

  {
    icon: OpenWithOutlinedIcon,
    headline: "Sentence Expandar",
    title: "Expand short sentence into more descrive",
    key_id: "3",
    style: "primary",
    position: 8,
  },
  {
    icon: Amazon,
    headline: "Amazon Product Descriptions",
    title: "Descriptions that will rank in first page",
    key_id: "5",
    position: 9,
  },
  {
    icon: Amazon,
    headline: "Amazon Product Features",
    title: "Descriptions that will rank in first page",
    key_id: "5",
    position: 10,
  },
  {
    icon: Amazon,
    headline: "Amazon Product Titels",
    title: "Powerful titels that rank on google",
    key_id: "5",
    position: 11,
  },
  {
    icon: PublicOutlinedIcon,
    headline: "Landing Page Headline",
    title: "A unique and memorable perfect headline",
    key_id: "6",
    style: "primary",
    position: 12,
  },
  {
    icon: BarChartOutlinedIcon,
    headline: "Keyword Research",
    title: "Pick your excet keyword for rank anything",
    key_id: "4",
    style: "primary",
    position: 13,
  },
  {
    icon: LinkIn,
    headline: "LinkedIn Posts",
    title: "Engage your LinkedIn Targeted Audience",
    key_id: "2",
    position: 14,
  },
  {
    icon: Youtube,
    headline: "Youtube Descriptions",
    title: "YouTube description that help your videos",
    key_id: "2",
    position: 15,
  },
  {
    icon: Mail,
    headline: "Cold Emails",
    title: "Personalized email outreach to your target",
    key_id: "3",
    position: 16,
  },
];
const initialState = topics;
const ALL = "0";
const ARTICLE_AND_BLOG = "1";
const SOCIAL_MEDIA = "2";
const WRITING = "3";
const KEYWORD_RESEARCH = "4";
const ECOMMERCE = "5";
const WEBSITE = "6";
const reducer = (state, action) => {
  switch (action) {
    case ALL:
      return topics;
    case ARTICLE_AND_BLOG:
      return topics.filter((topic) => topic.key_id === "1");
    case SOCIAL_MEDIA:
      return topics.filter((topic) => topic.key_id === "2");
    case WRITING:
      return topics.filter((topic) => topic.key_id === "3");
    case KEYWORD_RESEARCH:
      return topics.filter((topic) => topic.key_id === "4");
    case ECOMMERCE:
      return topics.filter((topic) => topic.key_id === "5");
    case WEBSITE:
      return topics.filter((topic) => topic.key_id === "6");
    default:
      throw new Error("Error");
  }
};
function Slider() {
  const [alignment, setAlignment] = useState(0);
  const headName = useContext(AuthContext);
  const [writing, setWriting] = useState(false);
  const [data, setData] = useState();
  const [position, setPosition] = useState();
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [currentTopic, dispatch] = useReducer(reducer, initialState);
  const handleClickBtn = (index) => {
    if (index === 0) dispatch(ALL);
    if (index === 1) dispatch(ARTICLE_AND_BLOG);
    if (index === 2) dispatch(SOCIAL_MEDIA);
    if (index === 3) dispatch(WRITING);
    if (index === 4) dispatch(KEYWORD_RESEARCH);
    if (index === 5) dispatch(ECOMMERCE);
    if (index === 6) dispatch(WEBSITE);
  };
  const handleWriting = (e) => {
    setData(currentTopic[e]);
    setPosition(currentTopic[e].position);
    setWriting(true);
  };
  return (
    <>
      {writing ? (
        position === 13 ? (
          <Writing data={data} position={position}></Writing>
        ) : (
          <>
            <div
              className={cx("button-back")}
              onClick={() => {
                setWriting(false);
              }}
            >
              <ArrowBackIcon className={cx("icon-btn")}></ArrowBackIcon>
              <h2>Back</h2>
            </div>
            <Writing data={data} position={position}></Writing>
          </>
        )
      ) : (
        <>
          <div className={cx("headline")}>
            <h2>
              ️️️️🎉 {headName.user.displayName} , So, what exactly do you have
              in mind?
            </h2>
            <p>Begin with selecting the content type from the options below.</p>
          </div>
          <div className={cx("slider")}>
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
            >
              {buttonCt.map((btn, index) => (
                <ToggleButton
                  onClick={() => handleClickBtn(index)}
                  className={cx("btn")}
                  key={index}
                  value={index}
                >
                  {btn}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </div>
          <div className={cx("popular-category")}>
            <h3>Popular Category</h3>
            <div className={cx("container-category")}>
              <div className={cx("blog")}>
                <DescriptionOutlinedIcon
                  className={cx("icon-category")}
                ></DescriptionOutlinedIcon>
                <div className={cx("inner-ct")}>
                  <h2>Article and Blog</h2>
                  <p>Write your dream SEO article short time</p>
                </div>
              </div>
              <div className={cx("media")}>
                <CampaignOutlinedIcon
                  className={cx("icon-category")}
                ></CampaignOutlinedIcon>
                <div className={cx("inner-ct")}>
                  <h2>Social Media</h2>
                  <p>Write compelling detailed product</p>
                </div>
              </div>
              <div className={cx("research")}>
                <BarChartOutlinedIcon
                  className={cx("icon-category")}
                ></BarChartOutlinedIcon>
                <div className={cx("inner-ct")}>
                  <h2>Keyword Research</h2>
                  <p>Pick your excet keyword for rank anything</p>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("layout-slider")}>
            <h3>All Topics</h3>
            <div className={cx("container-slider")}>
              {currentTopic.map((topic, index) => {
                if (index <= 8) {
                  const Icon = topic.icon;
                  return (
                    <div
                      key={index}
                      className={cx("cover-topic")}
                      onClick={() => handleWriting(index)}
                    >
                      <div className={cx("inner-topic")}>
                        <Icon
                          className={cx(`${topic.style}`, "icon-topic")}
                        ></Icon>
                        <div className={cx("content")}>
                          <h2>{topic.headline}</h2>
                          <p>{topic.title}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Slider;
