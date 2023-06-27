import Title from "antd/es/typography/Title";
import React from "react";
import { Link } from "react-router-dom";

export default function StoryListItem() {
  return (
    <Link to="/stories/vikas/ouoiq321" className="story-list-item">
    <div className="story-img_container">
      <img
        src="https://xsgames.co/randomusers/avatar.php?g=pixel"
        alt="profile"
        width={55}
        height={55}
      />
    </div>
      <Title level={5} style={{margin:'0',color:'rgba(0,0,0,0.58)',fontSize:'13px'}}>username</Title>
    </Link>
  );
}
