import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const { TextArea } = Input;

export default function AddComment({ postId, name }) {
  const [form] = Form.useForm();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleSubmit = (values) => {
    console.log("Submitting:", values, postId);
    form.resetFields();
    setIsButtonDisabled(true);
  };

  const handleInputChange = (e) => {
    setIsButtonDisabled(e.target.value.trim().length === 0);
  };

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      className="add-comment"
      style={{ marginTop: "0", display: "flex", alignItems: "center" }}
      name={name}
    >
      <Form.Item style={{ flex: 4 }} name="comment">
        <TextArea
          rows={2}
          id="comment"
          placeholder="Add a comment..."
          onChange={handleInputChange}
        />
      </Form.Item>
      <Form.Item style={{ flex: 1 }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{ marginLeft: "0.5rem" }}
          disabled={isButtonDisabled}
        >
          Post
        </Button>
      </Form.Item>
    </Form>
  );
}
