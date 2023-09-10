import { Avatar, Typography } from "antd";
import React from "react";
import ProfileLink from "./ProfileLink";

const ProfileLinkLabel = ({ username, avatarIcon, avatarSize, extraData }) => {
  return (
    <>
      <Avatar size={avatarSize} icon={avatarIcon} />
      <div className="link-data" style={{ margin: "0 0 0 0.5rem" }}>
        <Typography.Title level={5} style={{ margin: 0 }}>
          {username}
        </Typography.Title>
        <Typography.Title
          level={5}
          style={{
            fontSize: "1em",
            margin: 0,
            color: "#737373",
            fontWeight: "400",
          }}
        >
          {extraData}
        </Typography.Title>
      </div>
    </>
  );
};
export default function ProfileCard({
  link,
  username,
  avatarSize,
  avatarIcon,
  additionalStyles,
  extraData,
}) {
  return (
    <div className="profile-card" style={additionalStyles}>
      <ProfileLink
        id="jggiuiyi5636"
        label={
          <ProfileLinkLabel
            username={username}
            avatarSize={avatarSize}
            avatarIcon={avatarIcon}
            extraData={extraData}
          />
        }
        additionalStyles={{ display: "flex", alignItems: "center" }}
      />
      <div className="switch">{link}</div>
    </div>
  );
}
