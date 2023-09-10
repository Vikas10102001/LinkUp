import React from "react";
import binaryToBase64 from "../../../../../utils/binaryToBase64Image";

export default function PostModalLeft({ post }) {
  const image = binaryToBase64(post.postData.data);

  return (
    <div
      style={{
        height: "83vh",
        width: "33vw",
        borderRight: "1px solid #d6d4d4",
        flex:1
      }}
    >
      <img
        alt="example"
        src={image}
        width={"100%"}
        height={"100%"}
        style={{ borderRadius: 0 }}
      />
    </div>
  );
}
