import React from "react";
import ProfileCard from "../../../../../utils/shared/component/ProfileCard";
import AddComment from "../Post/Comment/AddComment";
import {
  FileAddOutlined,
  HeartOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Popover } from "antd";
import CommentSection from "./CommentSection";

export default function PostModalRight() {
  return (
    <div style={{ flex: 1, position: "relative" }}>
      <ProfileCard
        username={"vikass.channd * Following"}
        avatarIcon={<UserOutlined />}
        avatarSize={50}
        extraData={"Posted 24hr ago"}
        additionalStyles={{
          fontSize: "12px",
          width: "100%",
          borderBottom: "1px solid rgb(214 212 212 / 40%)",
          padding: "0.5rem 0 0.5rem 1rem",
          boxSizing: "border-box",
        }}
      />
      <CommentSection />
      <div
        style={{
          position: "absolute",
          width: "100%",
          bottom: 0,
          padding: "0 0 0 1rem",
          borderTop: "1px solid rgb(214 212 212 / 40%)",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "1rem 0",
          }}
        >
          <HeartOutlined style={{ fontSize: "20px" }} />
          <ShareAltOutlined style={{ fontSize: "20px", userSelect: "none" }} />
          <Popover title="Save to collection">
            <FileAddOutlined style={{ fontSize: "20px", userSelect: "none" }} />
          </Popover>
        </div>
        <span>100 likes</span>
        <AddComment postId={2678} name="add-comment-2" />
      </div>
    </div>
  );
}
