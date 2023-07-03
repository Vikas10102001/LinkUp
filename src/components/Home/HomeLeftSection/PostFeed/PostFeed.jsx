import React from "react";
import PostListItem from "./Post/PostListItem";

export default function PostFeed() {
  
  return (
    <div className="post-feed">
      <PostListItem/>
      <PostListItem/>
      <PostListItem/>
      <PostListItem/>
    </div>
  );
}
