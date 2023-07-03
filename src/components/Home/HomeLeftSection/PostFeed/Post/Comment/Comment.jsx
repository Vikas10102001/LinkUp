import { CommentOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import AddComment from "./AddComment";
import ViewComment from "./ViewComment";

export default function Comment() {
  return (
    <div>
      <ViewComment />
      <AddComment />
    </div>
  );
}
