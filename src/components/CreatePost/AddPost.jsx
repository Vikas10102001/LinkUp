import { InboxOutlined } from "@ant-design/icons";
import { Upload, Form, Input } from "antd";
import { useState } from "react";
const AddPost = ({postData,setPostData}) => {
  let fileList=[]
  postData.fileList?.forEach(el=>{
    fileList.push(el)
  })
  console.log(fileList)
  const handleCaptionTextChange = (e) => {
    setPostData((prev) => {
      return { ...prev, caption: e.target.value };
    });
  };
  const normFile = (e) => {
    // setFileList((prev)=>[...prev,e.file]);
    setPostData((prev) => {
      return { ...prev, fileList: e.fileList };
    });
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <Form
      name="create_post"
      className="post-form"
      style={{
        marginTop: "30px",
      }}
    >
      <Form.Item
        name="dragger"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        noStyle
      >
        <Upload.Dragger
          name="files"
          action={null}
          listType="picture"
          beforeUpload={(file) => {
            return false;
          }}
          defaultFileList={fileList}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload.
          </p>
        </Upload.Dragger>
      </Form.Item>

      <Form.Item
        name={["post", "Caption"]}
        label="Caption"
        style={{ marginTop: 5 }}
      >
        <Input.TextArea onChange={handleCaptionTextChange} />
      </Form.Item>
    </Form>
  );
};
export default AddPost;
