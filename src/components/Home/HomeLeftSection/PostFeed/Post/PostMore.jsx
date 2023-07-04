import { MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];
const PostMore = () => (
  <>
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomRight"
      trigger="click"
    >
      <MoreOutlined
        key="more"
        style={{ fontSize: "20px", userSelect: "none" }}
      />
    </Dropdown>
  </>
);
export default PostMore;
