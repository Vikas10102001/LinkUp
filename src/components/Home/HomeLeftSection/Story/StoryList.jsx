import React, { forwardRef } from "react";
import StoryListItem from "./StoryListItem";

const StoryList=forwardRef((props,ref)=> {

  return (
    <div className="story-list" ref={ref}>
      <StoryListItem />
      <StoryListItem />
      <StoryListItem />
      <StoryListItem />
      <StoryListItem />
      <StoryListItem />
      <StoryListItem />
      <StoryListItem />
      <StoryListItem />
      <StoryListItem />
      <StoryListItem />
    </div>
  );
})
export default StoryList