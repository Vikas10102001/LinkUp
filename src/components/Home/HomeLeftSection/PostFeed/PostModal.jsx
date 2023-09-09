import { Modal } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowPostModal } from "../../../../store/store";

export default function PostModal() {
  const dispatch = useDispatch();
  const showPostModal = useSelector((state) => {
    return state.post.showPostModal;
  });
  const handleOk = () => {};
  const handleCancel = () => {
    dispatch(setShowPostModal(false));
  };
  return (
    <>
      <Modal
        title="Basic Modal"
        open={showPostModal}
        onOk={handleOk}
        onCancel={handleCancel}
        maskStyle={{ zIndex: 101}}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
