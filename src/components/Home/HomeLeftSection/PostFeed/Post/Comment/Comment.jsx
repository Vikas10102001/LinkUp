import React from "react";
import AddComment from "./AddComment";
import ViewComment from "./ViewComment";

export default function Comment() {
  return (
    <div className="post-comment">
      <ViewComment />
      <AddComment />
    </div>
  );
}
