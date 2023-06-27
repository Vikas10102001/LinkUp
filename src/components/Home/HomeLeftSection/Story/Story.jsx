import React, { useRef, useState } from "react";
import StoryList from "./StoryList";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";

export default function Story() {
  const listRef = useRef();
  const [showRightScrollBtn, setShowRightScrollBtn] = useState(false);
  const handleLeftScroll = () => {
    if (listRef.current) {
      listRef.current.scrollTo({
        left: listRef.current.scrollLeft - 395,
        behavior: "smooth",
      });
    }
    if (listRef.current.scrollLeft - 395 < 0) {
      setShowRightScrollBtn(false);
    }
  };
  const handleRightScroll = () => {
    if (listRef.current) {
      listRef.current.scrollTo({
        left: listRef.current.scrollLeft + 395, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
    console.log(listRef.current.scrollLeft);
    setShowRightScrollBtn(true);
  };
  return (
    <div className="story">
      <RightCircleOutlined
        className="story-scroll_button right"
        id="scroll-right"
        onClick={handleRightScroll}
      />
      {showRightScrollBtn && (
        <LeftCircleOutlined
          className="story-scroll_button left"
          id="scroll-left"
          onClick={handleLeftScroll}
        />
      )}
      <StoryList ref={listRef} />
    </div>
  );
}
