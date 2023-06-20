import { Button, Modal } from "antd";
import PreviewPost from "./PreviewPost/PreviewPost";
import { useState } from "react";
import AddPost from "./AddPost";
import PreviewPostFooter from "./footer/PreviewPostFooter";
import AddPostFooter from "./footer/AddPostFooter";

export default function CreatePostModal({ isModalOpen, setIsModalOpen }) {
  const [postData, setPostData] = useState({
    fileList: null,
    caption: null,
  });
  const [previewPost, setPreviewPost] = useState(false);

  const handleAddPostNext = () => {
    setPreviewPost(true);
  };

  const handleAddPostCancel = () => {
    // Logic specific to AddPost handleCancel
    setIsModalOpen(false);
  };

  const handlePreviewPostSubmit = () => {
    // Logic specific to PreviewPost handleSubmit
  };

  const handlePreviewPostCancel = () => {
    // Logic specific to PreviewPost handleCancel
    setIsModalOpen(false);
  };
  const handlePreviewPostBack = () => {
    setPreviewPost(false);
  };

  return (
    <Modal
      title="Create Post"
      open={isModalOpen}
      onCancel={handleAddPostCancel} // Use AddPost specific handleCancel
      width={600}
      style={{ textAlign: "center" }}
      footer={
        previewPost ? (
          <PreviewPostFooter
            handlePreviewPostBack={handlePreviewPostBack}
            handlePreviewPostCancel={handlePreviewPostCancel}
            handleAddPostSubmit={handlePreviewPostSubmit}
          />
        ) : (
          <AddPostFooter
            handleAddPostCancel={handleAddPostCancel}
            handleAddPostNext={handleAddPostNext}
          />
        )
      }
    >
      {previewPost ? (
        <PreviewPost postData={postData} setPostData={setPostData} />
      ) : (
        <AddPost postData={postData} setPostData={setPostData} />
      )}
    </Modal>
  );
}
