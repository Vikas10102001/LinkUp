import { Button } from "antd";
import React from "react";

export default function PreviewPostFooter({
  handlePreviewPostBack,
  handlePreviewPostCancel,
  handlePreviewPostSubmit,
}) {
  return (
    <div>
      <Button onClick={handlePreviewPostSubmit} type="primary">
        Post
      </Button>
      <Button onClick={handlePreviewPostBack} type="primary">
        Back
      </Button>
      <Button onClick={handlePreviewPostCancel} >
        Cancel
      </Button>
    </div>
  );
}
