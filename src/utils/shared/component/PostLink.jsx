import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setShowPostModal } from "../../../store/store";

export default function PostLink({ label, id, additionalStyles }) {
  const dispatch = useDispatch();
  const handlePost = () => {
    dispatch(setShowPostModal({ showPostModal: true }));
  };
  return (
    <Link
      to={`/posts/:${id}`}
      onClick={handlePost}
      className="link post-link"
      style={additionalStyles}
    >
      {label}
    </Link>
  );
}
