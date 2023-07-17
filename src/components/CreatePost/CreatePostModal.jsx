import { Button, Modal } from "antd";
import PreviewPost from "./PreviewPost/PreviewPost";
import { useState } from "react";
import AddPost from "./AddPost";
import PreviewPostFooter from "./footer/PreviewPostFooter";
import AddPostFooter from "./footer/AddPostFooter";
import { useCreatePostMutation } from "../../store/store";

export default function CreatePostModal({ isModalOpen, setIsModalOpen }) {
  const[createPost,results]=useCreatePostMutation()

  const [postData, setPostData] = useState({
    fileList: [],
    caption: "",
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
    const dataToSend = new FormData();
    if(postData.caption)
    {
    dataToSend.append("caption", postData.caption);
    }
    dataToSend.append("photo", postData.fileList[0].originFileObj);
    createPost(dataToSend).then((res)=>{
      console.log(res)
    }).catch(er=>{
      console.log(er)
    })
  };

  const handlePreviewPostCancel = () => {
    // Logic specific to PreviewPost handleCancel
    setPostData({
      fileList: null,
      caption: null,
    });
    setIsModalOpen(false);
    setPreviewPost(false);
  };
  const handlePreviewPostBack = () => {
    setPreviewPost(false);
  };

  return (
    <Modal
      title={<span style={{ fontSize: "20px" }}>Create Post</span>}
      open={isModalOpen}
      onCancel={handleAddPostCancel} // Use AddPost specific handleCancel
      width={600}
      style={{ textAlign: "center", userSelect: "none" }}
      footer={
        previewPost ? (
          <PreviewPostFooter
            handlePreviewPostBack={handlePreviewPostBack}
            handlePreviewPostCancel={handlePreviewPostCancel}
            handlePreviewPostSubmit={handlePreviewPostSubmit}
          />
        ) : (
          <AddPostFooter
            handleAddPostCancel={handleAddPostCancel}
            handleAddPostNext={handleAddPostNext}
            postData={postData}
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
