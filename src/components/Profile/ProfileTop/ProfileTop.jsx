import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";
import ProfileTopRight from "./ProfileTopRight";

export default function ProfileTop() {
  return (
    <div className="profile-top">
      <Avatar icon={<UserOutlined />} size={150} />
      <ProfileTopRight />
    </div>
  );
}
