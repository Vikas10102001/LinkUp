import React, { useState } from "react";
import ProfileBottomMenu from "./ProfileBottomMenu";
import UserPosts from "./UserPosts";
import UserTaggedPosts from "./UserTaggedPosts";

export default function ProfileBottom() {
  const [current, setCurrent] = useState("POSTS");
  return (
    <div className="profile-bottom">
      <ProfileBottomMenu current={current} setCurrent={setCurrent} />
      {current === "POSTS" ? <UserPosts /> : <UserTaggedPosts />}
    </div>
  );
}
