import Title from "antd/es/typography/Title";
import React from "react";
import { Link } from "react-router-dom";
import SuggestedFriendList from "./SuggestedFriendList";

export default function SuggestedFriends() {
  return (
    <>
      <div className="heading">
        <Title level={5} style={{margin:0}}>Suggested for u</Title>
        <Link to="explore/people">See all</Link>
      </div>
      <SuggestedFriendList />
    </>
  );
}
