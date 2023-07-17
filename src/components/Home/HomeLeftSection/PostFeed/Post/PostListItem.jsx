import {
  CommentOutlined,
  FileAddOutlined,
  HeartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Popover } from "antd";
import Comment from "./Comment/Comment";
import { useState } from "react";
import PostLikeAndTime from "./PostLikeAndTime/PostLikeAndTime";
import PostMore from "./PostMore";
import binaryToBase64 from "../../../../../utils/binaryToBase64Image";
const { Meta } = Card;
const PostListItem = ({ post }) => {
  const [showComment, setShowComment] = useState(false);

  const image = binaryToBase64(post.postData.data);
  const handleComment = () => {
    setShowComment(!showComment);
  };

  return (
    <div className="post-card">
      <Card
        style={{
          width: 480,
        }}
        cover={
          <img
            alt="example"
            src={image}
            height={450}
            style={{ borderRadius: 0 }}
          />
        }
        actions={[
          <HeartOutlined key="like" style={{ fontSize: "20px" }} />,
          <CommentOutlined
            style={{ fontSize: "20px", userSelect: "none" }}
            onClick={handleComment}
          />,
          <ShareAltOutlined
            key="share"
            style={{ fontSize: "20px", userSelect: "none" }}
          />,
          <Popover title="Save to collection">
            <FileAddOutlined
              key="save"
              style={{ fontSize: "20px", userSelect: "none" }}
            />
          </Popover>,
        ]}
        extra={<PostMore />}
      >
        <Meta
          avatar={
            <Avatar
              style={{ width: 60, height: 60 }}
              src="https://xsgames.co/randomusers/avatar.php?g=pixel"
            />
          }
          title="Posted By"
          description={post.caption}
        />
      </Card>
      <PostLikeAndTime />
      {showComment && <Comment />}
    </div>
  );
};
export default PostListItem;
