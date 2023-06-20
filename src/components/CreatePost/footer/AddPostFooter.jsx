import { Button } from "antd";
import React from "react";

export default function AddPostFooter({
  handleAddPostNext,
  handleAddPostCancel,
}) {
  return (
    <div>
      <Button onClick={handleAddPostNext} type="primary">
        Next
      </Button>
      <Button onClick={handleAddPostCancel}>Cancel</Button>
    </div>
  );
}
