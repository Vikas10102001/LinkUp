import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const { TextArea } = Input;

export default function AddComment() {
  const [form] = Form.useForm();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleSubmit = (values) => {
    console.log("Submitting:", values);
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
      style={{ marginTop: "0.75rem", display: "flex",alignItems:'center' }}
      name="add-comment"
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
