import {
  CommentOutlined,
  FileAddOutlined,
  HeartOutlined,
  MoreOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Popover } from "antd";
import Comment from "./Comment/Comment";
import { useState } from "react";
import PostLikeAndTime from "./PostLikeAndTime/PostLikeAndTime";
const { Meta } = Card;
const PostListItem = () => {
  const [showComment, setShowComment] = useState(false);
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
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            height={450}
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
        extra={
          <MoreOutlined
            key="more"
            style={{ fontSize: "20px", userSelect: "none" }}
          />
        }
      >
        <Meta
          avatar={
            <Avatar
              style={{ width: 60, height: 60 }}
              src="https://xsgames.co/randomusers/avatar.php?g=pixel"
            />
          }
          title="Posted By"
          description="This is the description"
        />
      </Card>
      <PostLikeAndTime />
      {showComment && <Comment />}
    </div>
  );
};
export default PostListItem;
