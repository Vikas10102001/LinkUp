import { Modal } from "antd";
import React from "react";
import PostModalLeft from "./PostModalLeft";
import PostModalRight from "./PostModalRight";

export default function PostModal({ post, showPostModal, setShowPostModal }) {
  const handleCancel = () => {
    setShowPostModal(false);
  };
  return (
    <>
      <Modal
        title={<span>Post</span>}
        open={showPostModal}
        onCancel={handleCancel}
        maskStyle={{ zIndex: 101 }}
        footer={null}
        closeIcon={null}
        style={{ top: 20, minWidth: "70vw", height: "83vh", borderRadius: 0 }}
      >
        <div
          style={{
            display: "flex",
            border: "1px solid rgb(214 212 212 / 40%)",
          }}
        >
          <PostModalLeft post={post} />
          <PostModalRight post={post} />
        </div>
      </Modal>
    </>
  );
}
