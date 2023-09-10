import React from "react";
import AddComment from "./AddComment";
import ViewComment from "./ViewComment";

export default function Comment({ postId, setShowPostModal }) {
  return (
    <div className="post-comment">
      <ViewComment setShowPostModal={setShowPostModal} />
      <AddComment postId={postId} name={"add-comment-1"} />
    </div>
  );
}
