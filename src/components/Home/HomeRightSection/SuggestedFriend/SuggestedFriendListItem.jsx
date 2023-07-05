import React from "react";
import ProfileCard from "../ProfileCard";
import { UserOutlined } from "@ant-design/icons";

export default function SuggestedFriendListItem() {
  return (
    <div className="suggested-friend" style={{ marginTop: "0.85rem"}}>
      <ProfileCard
        username={"vikass.channd"}
        avatarIcon={<UserOutlined />}
        avatarSize={35}
        link={"Follow"}
        extraData={"Followed by vikas and 11 others"}
      />
    </div>
  );
}
