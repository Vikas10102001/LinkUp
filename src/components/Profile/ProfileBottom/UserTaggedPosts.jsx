import React from "react";
import UserPostImage from "./UserPostImage";

export default function UserTaggedPosts() {
  let arr = [];
  for (let i = 0; i < 20; i++) {
    arr.push(
      <UserPostImage
        src={`https://source.unsplash.com/random/200x200?sig=${i}`}
      />
    );
  }

  return <div>{arr}</div>;
}
