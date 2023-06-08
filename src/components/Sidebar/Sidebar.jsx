import {
  CompassOutlined,
  HeartOutlined,
  HomeOutlined,
  MessageOutlined,
  PlusSquareOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";

function getItem(label, key, icon, path, type) {
  return {
    key,
    icon,
    label,
    path,
    type,
  };
}
const items = [
  getItem(
    "Home",
    "1",
    <HomeOutlined style={{ fontSize: "20px" }} />,
    "/",
    "link"
  ),
  getItem("Search", "2", <SearchOutlined style={{ fontSize: "20px" }} />),
  getItem(
    "Explore",
    "3",
    <CompassOutlined style={{ fontSize: "20px" }} />,
    "/explore",
    "link"
  ),
  getItem(
    "Message",
    "4",
    <MessageOutlined style={{ fontSize: "20px" }} />,
    "/messenger",
    "link"
  ),
  getItem("Notification", "5", <HeartOutlined style={{ fontSize: "20px" }} />),
  getItem("Create", "6", <PlusSquareOutlined style={{ fontSize: "20px" }} />),
];

const Sidebar = () => {
  const pathKeys = useMemo(
    () => ({
      "/": "1",
      "/explore": "3",
      "/messenger": "4",
    }),
    []
  );
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [currentPathKey, setCurrentPathKey] = useState(
    pathKeys[location.pathname]
  );

  useEffect(() => {
    setCurrentPathKey(pathKeys[location.pathname]);
  }, [location.pathname, pathKeys]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  console.log(currentPathKey);
  return (
    <Sider
      theme="light"
      style={{
        width: 256,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingTop: 40,
        borderInlineEnd: "1px solid rgba(5, 5, 5, 0.08)",
        position: "fixed",
        top: 0,
        bottom: 0,
      }}
      collapsed={collapsed}
    >
      <Logo />
      <Menu
        defaultSelectedKeys={[currentPathKey]}
        mode="inline"
        theme="light"
        style={{
          marginTop: "20px",
          border: "none",
        }}
      >
        {items.map((item) => (
          <Menu.Item
            key={item.key}
            icon={item.icon}
            style={{ fontSize: "16px", marginTop: "20px" }}
          >
            {item.type === "link" ? (
              <Link to={item.path}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
