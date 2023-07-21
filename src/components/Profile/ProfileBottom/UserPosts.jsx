import React from "react";
import UserPostImage from "./UserPostImage";

export default function UserPosts() {
  let arr = [];
  for (let i = 20; i < 53; i++) {
    arr.push(
      <UserPostImage
        src={`https://source.unsplash.com/random/200x200?sig=${i}`}
      />
    );
  }

  return <div>{arr}</div>;
}
