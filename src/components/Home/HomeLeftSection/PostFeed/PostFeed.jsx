import React from "react";
import PostListItem from "./Post/PostListItem";
import { useGetPostQuery } from "../../../../store/store";
import { useNavigate } from "react-router-dom";
import Skeleton from "../../../../utils/shared/component/Skeleton";
import PostModal from "./PostModal";

export default function PostFeed() {
  const { data, error, isLoading } = useGetPostQuery();
  const navigate = useNavigate();

  if (error) navigate("/login");

  return (
    <>
      <div className="post-feed">
        {isLoading ? (
          <Skeleton />
        ) : (
          data?.posts.map((el) => <PostListItem key={el.id} post={el} />)
        )}
      </div>
      <PostModal />
    </>
  );
}
