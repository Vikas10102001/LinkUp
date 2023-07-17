import React from "react";
import PostListItem from "./Post/PostListItem";
import { useGetPostQuery } from "../../../../store/store";


export default function PostFeed() {
  const { data, error, isLoading } = useGetPostQuery();
  console.log(data);
  
  return (
    <div className="post-feed">
      {data?.posts.map((el) => (
        <PostListItem key={el.id} post={el} />
      ))}
    </div>
  );
}
