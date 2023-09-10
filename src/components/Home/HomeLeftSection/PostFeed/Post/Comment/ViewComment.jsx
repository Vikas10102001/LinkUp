import React from "react";

export default function ViewComment({ setShowPostModal }) {
  const handleOnClick = () => {
    setShowPostModal(true);
  };
  return (
    <div
      onClick={handleOnClick}
      className="link post-link"
      style={{ cursor: "pointer", color: "rgb(153 149 149)" }}
    >
      View all 12 comments
    </div>
  );
}
