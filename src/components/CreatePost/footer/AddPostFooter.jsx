import { Button } from "antd";
import React from "react";

export default function AddPostFooter({
  handleAddPostNext,
  handleAddPostCancel,
  postData
}) {

  console.log(postData)
  return (
    <div>
      <Button onClick={handleAddPostNext} type="primary" disabled={!postData.fileList}>
        Next
      </Button>
      <Button onClick={handleAddPostCancel}>Cancel</Button>
    </div>
  );
}
