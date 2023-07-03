import { Modal } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowPostModal } from "../store/store";
import Home from "./Home";
import { useNavigate } from "react-router-dom";

export default function Post() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const showPostModal = useSelector((state) => {
    return state.post.showPostModal;
  });
  const handleOk = () => {};
  const handleCancel = () => {
    dispatch(setShowPostModal(false));
    navigate("/")

  };
  return (
    <>
      <Home></Home>
      <Modal
        title="Basic Modal"
        open={showPostModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
