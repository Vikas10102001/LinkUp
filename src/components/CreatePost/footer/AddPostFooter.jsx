import { Button } from "antd";
import React from "react";

export default function AddPostFooter({
  handleAddPostNext,
  handleAddPostCancel,
  postData
}) {
  const disabled=!Boolean(postData.fileList)||postData.fileList.length===0;
  return (
    <div>
      <Button onClick={handleAddPostNext} type="primary" disabled={disabled}>
        Next
      </Button>
      <Button onClick={handleAddPostCancel}>Cancel</Button>
    </div>
  );
}
