import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon className="widgets__dotIcon" />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("This was made with React, Redux, Firebase", "Top news --- 999 readers")}
      {newsArticle("AI Can Write Code Like Humans—Bugs and All", "Artificial Intelligence --- 999 readers")}
      {newsArticle("You're Probably Not Using the Web's Best Browser", "Tech Gear --- 507 readers")}
      {newsArticle("The JavaScript Framework That Puts Web Pages on a Diet", "Programming --- 999 readers")}
    </div>
  );
}

export default Widgets;
