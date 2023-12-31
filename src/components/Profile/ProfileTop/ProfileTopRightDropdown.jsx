import { EllipsisOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
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
const ProfileTopRightDropdown = () => (
  <>
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomLeft"
      trigger="click"
    >
      <EllipsisOutlined
        key="more"
        style={{ fontSize: "20px", userSelect: "none" }}
      />
    </Dropdown>
  </>
);
export default ProfileTopRightDropdown;
