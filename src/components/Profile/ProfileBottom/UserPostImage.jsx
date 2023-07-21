import React from "react";

export default function UserPostImage({ src }) {
  return (
    <img
      src={src}
      alt=""
      style={{
        margin: "0.1rem 0.2rem 0.1rem 0.2rem",
        width: "calc(100% / 3 - 0.4rem)",
      }}
    />
  );
}
